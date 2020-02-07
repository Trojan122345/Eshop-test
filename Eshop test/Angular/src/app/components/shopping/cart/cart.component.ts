import {Component, OnInit} from '@angular/core';
import {OperState} from '../../../model/OperState';
import {OrdersProductsVM} from '../../../model/OrdersProductsVM';
import {ShoppingCartService} from '../Services/shopping-cart.service';
import {ProductsVM} from '../../../model/ProductsVM';
import {ProductsService} from '../../products/Services/products.service';
import {OrderAddrVM} from '../../../model/OrderAddrVM';
import {CartCompState} from './CartCompState';
import {OrdersService} from '../Services/orders.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../auth/Services/authentication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  loadingState = new OperState();
  cart: Array<OrdersProductsVM>;
  alteredAmount: number;
  listedProduct: ProductsVM;
  focusedProduct: ProductsVM;
  products: ProductsVM[] = [];
  componentState: CartCompState = new CartCompState();
  orderAddr: OrderAddrVM;
  totalPrice: number;
  orderNumber: number;
  wasAltered: boolean;

  constructor(private shoppingCartService: ShoppingCartService,
              private productsService: ProductsService,
              private ordersService: OrdersService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.shoppingCartService.isCartExists()) {
      this.loadingState.setWorking();
      this.shoppingCartService.updateCart();
      this.totalPrice = 0;
      this.orderAddr = new OrderAddrVM();
      this.componentState.setViewCart();
      this.wasAltered = false;
      this.cart = this.shoppingCartService.getCartFromSession();
      this.productsService.listSelling().subscribe(
        res => {
          this.products = res;
          this.updateTotalPrice();
          this.loadingState.setSuccess();
        },
        err => this.loadingState.setError(err)
      );
    }
  }

  loadProduct(currentID) {
    this.listedProduct = this.products.find(p => p.id === currentID);
  }

  updateTotalPrice() {
    this.totalPrice = 0;
    this.cart.forEach(ci =>
      this.totalPrice += this.products[
        this.products.findIndex(p => p.id === ci.productID)
        ].discountPrice * ci.amount
    );
  }

  finishOrder() {
    this.loadingState.setWorking();
    this.ordersService.orderCart(this.orderAddr).subscribe(
      res => {
        this.orderNumber = res.id;
        this.shoppingCartService.emptyCart();
        this.shoppingCartService.loadCartIDFromDB();
        this.loadingState.setSuccess();
        this.componentState.setFinished();
        this.showProducts();
      },
      err => this.loadingState.setError(err)
    );
  }

  getOrderItems() {
    this.loadingState.setWorking();
    this.ordersService.getOrderItems(this.orderNumber.toString(10)).subscribe(
      res => {
        this.cart = res;
        this.loadingState.setSuccess();
        this.getOrderItems();
      },
      err => this.loadingState.setError(err)
    );
  }

  alterAmount(productID: number) {
    this.focusedProduct = this.products.find(p => p.id === productID);
    this.alteredAmount = this.cart.find(c => c.productID === productID).amount;
  }

  amountChanged() {
    if (this.alteredAmount < 0 || this.alteredAmount == null) {
      this.alteredAmount = 0;
    }
  }

  finishUpdateAmount() {
    this.shoppingCartService.updateItemAmount(JSON.stringify(this.focusedProduct.id), this.alteredAmount);
    this.cart = this.shoppingCartService.getCartFromSession();
    this.updateTotalPrice();
  }

  empetyCart() {
    this.shoppingCartService.emptyCart();
  }

  showProducts() {
    setTimeout((router: Router) => {
        router.navigate(['products']);
      }, 1500, this.router
    );
  }
}
