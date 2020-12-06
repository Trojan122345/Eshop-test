import {Injectable} from '@angular/core';
import {OrdersProductsVM} from '../../../model/OrdersProductsVM';
import {ProductsService} from '../../products/Services/products.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {OrdersService} from './orders.service';
import {AuthenticationService} from '../../auth/Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private itemsInCartSource = new BehaviorSubject(this.getItemsAmount());
  itemsInCart = this.itemsInCartSource.asObservable();

  constructor(private productsService: ProductsService,
              private ordersService: OrdersService,
              private loginService: AuthenticationService) {
    if (this.loginService.isUserLoggedIn()) {
      this.updateCart();
    }
  }

  private changeItemsInCart() {
    this.itemsInCartSource.next(this.getItemsAmount());
  }

  public getItemsAmount(): number {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    if (cart == null) {
      return 0;
    } else {
      return cart.length;
    }
  }


  /*private createCart(): Array<OrdersProductsVM> {
    const cart = new Array<OrdersProductsVM>();
    this.ordersService.createCart().subscribe(
      orderID => {
        sessionStorage.setItem('cartID', JSON.stringify(orderID));
        this.saveCart(cart);
      }
    );
    return cart;
  }*/

  public getCartFromDB(): Observable<Array<OrdersProductsVM>> {
    return this.ordersService.getOrderItems(sessionStorage.getItem('cartID'));
  }

  public getCartFromSession(): Array<OrdersProductsVM> {
    return JSON.parse(sessionStorage.getItem('cart'));
  }

  public updateCart() {
    this.getCartFromDB().subscribe(
      cart => this.saveCart(cart),
      err => sessionStorage.removeItem('cart')
    );
  }

  private saveCart(cart: Array<OrdersProductsVM>) {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    this.changeItemsInCart();
  }

  public loadCartIDFromDB() {
    this.ordersService.getUsersCartID().subscribe(
      cartID => {
        sessionStorage.setItem('cartID', cartID.toString(10));
        this.updateCart();
      }
    );
  }

  public isCartExists(): boolean {
    const cart = sessionStorage.getItem('cart');
    if (cart == null || JSON.parse(cart).length === 0) {
      return false;
    } else {
      return true;
    }
  }

  public addItem(productID: number, amount: number) {
    const cartID = sessionStorage.getItem('cartID');

    const cartItem = new OrdersProductsVM();
    cartItem.id = null;
    cartItem.amount = amount;
    cartItem.productID = productID;
    cartItem.orderID = parseInt(cartID, 10);
    cartItem.pricePerProduct = null;

    this.ordersService.addToCart(cartItem).subscribe(
      res => {
        cartItem.id = res;
        this.addItemToSessCart(cartItem);
        console.log(res);
      }
    );
  }

  private addItemToSessCart(cartItem: OrdersProductsVM) {
    const cart = this.getCartFromSession();
    const index = cart.findIndex(ci => ci.productID === cartItem.productID);
    if (index < 0) {
      cart.push(cartItem);
    } else {
      cart[index].amount += cartItem.amount;
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
    this.changeItemsInCart();
  }

  public emptyCart() {
    this.ordersService.emptyCart();
    const cart: OrdersProductsVM[] = [];
    sessionStorage.setItem('cart', JSON.stringify(cart));

    this.changeItemsInCart();
  }

  public updateItemAmount(productIDS: string, newAmount: number) {
    const productID = parseInt(productIDS, 10);
    const cart = this.getCartFromSession();
    const index = cart.findIndex(p => p.productID === productID);
    if (index > -1) {
      if (newAmount <= 0) {
        cart.splice(index, 1);
      } else {
        cart[index].amount = newAmount;
      }
      sessionStorage.setItem('cart', JSON.stringify(cart));
      this.changeItemsInCart();
      this.ordersService.updateCartItemAmount(productIDS, JSON.stringify(newAmount));
    }
  }
}
