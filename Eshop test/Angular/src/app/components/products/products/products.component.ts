import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OperState} from '../../../model/OperState';
import {ProductsService} from '../Services/products.service';
import {ProductsVM} from '../../../model/ProductsVM';
import {OrdersProductsVM} from '../../../model/OrdersProductsVM';
import {LoginComponent} from '../../auth/login/login.component';
import {ShoppingCartService} from '../../shopping/Services/shopping-cart.service';
import {AuthenticationService} from '../../auth/Services/authentication.service';
import {log} from 'util';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ITEMSPERPAGE = 3;

  loadingState = new OperState();
  products: ProductsVM[] = [];
  adminProducts: ProductsVM[] = [];
  productsPage: ProductsVM[] = [];
  pages: number[] = [];
  showAdminProducts = false;
  isAlterProduct: boolean;
  focusedProduct: ProductsVM;
  amountToAdd = 1;
  currentPage: number;
  totalPrice: number;

  constructor(private productService: ProductsService,
              private shoppingCartService: ShoppingCartService,
              private loginService: AuthenticationService,
  ) {
  }

  ngOnInit() {
    this.loadingState.setWorking();
    this.productService.listSelling().subscribe(
      res => {
        this.products = res;
        this.loadingState.setSuccess();
        this.fillPages();
        this.loadPage(1);
      },
      err => this.loadingState.setError(err)
    );

    if (this.loginService.isUserAdmin()) {
      this.loadingState.setWorking();
      this.productService.listNotSelling().subscribe(
        res => {
          this.adminProducts = res;
          this.loadingState.setSuccess();
        },
        err => this.loadingState.setError(err)
      );
    }
  }

  checkNotAdminMode() {
    if (this.showAdminProducts) {
      this.changeShowAdminProducts();
    }
  }

  changeShowAdminProducts() {
    this.showAdminProducts = !this.showAdminProducts;
    this.fillPages();
    this.loadPage(1);
  }

  loadPage(page: number) {
    this.currentPage = page;
    this.productsPage = [];
    const start = (page - 1) * this.ITEMSPERPAGE;
    let end = start + this.ITEMSPERPAGE;
    if (!this.showAdminProducts) {
      if (end > this.products.length) {
        end = this.products.length;
      }
      for (let i = start; i < end; i++) {
        this.productsPage.push(this.products[i]);
      }
    } else {
      if (end > this.adminProducts.length) {
        end = this.adminProducts.length;
      }
      for (let i = start; i < end; i++) {
        this.productsPage.push(this.adminProducts[i]);
      }
    }
  }

  fillPages() {
    this.pages = [];
    if (!this.showAdminProducts) {
      for (let i = 0; i < this.products.length / this.ITEMSPERPAGE; i++) {
        this.pages.push(i + 1);
      }
    } else {
      for (let i = 0; i < this.adminProducts.length / this.ITEMSPERPAGE; i++) {
        this.pages.push(i + 1);
      }
    }
  }

  focusProduct(productID: number) {
    this.focusedProduct = this.products.find(p => p.id === productID);
    if (this.focusedProduct == null) {
      this.focusedProduct = this.adminProducts.find(p => p.id === productID);
    }
    this.amountToAdd = 1;
  }

  addToCart() {
    this.shoppingCartService.addItem(this.focusedProduct.id, this.amountToAdd);
  }

  changeTempProductSale(PID: number) {
    let arrayFrom: ProductsVM[];
    let arrayTo: ProductsVM[];
    if (this.products.findIndex(p => p.id === PID) < 0) {
      arrayFrom = this.adminProducts;
      arrayTo = this.products;
    } else {
      arrayFrom = this.products;
      arrayTo = this.adminProducts;
    }
    const productTemp: ProductsVM = arrayFrom.find(p => p.id === PID);
    productTemp.selling = !productTemp.selling;
    arrayFrom.splice(arrayFrom.findIndex(p => p.id === PID), 1);
    arrayTo.push(productTemp);
    this.fillPages();
    this.loadPage(this.currentPage);
  }

  putProductOut() {
    this.productService.putOutOfSale(this.focusedProduct.id).subscribe(
      res => this.changeTempProductSale(this.focusedProduct.id),
      err => this.loadingState.setError(err)
    );
  }

  putProductBack() {
    this.productService.putOnSale(this.focusedProduct.id).subscribe(
      res => this.changeTempProductSale(this.focusedProduct.id),
      err => this.loadingState.setError(err)
    );
  }

  alterProduct(productID: number) {
    this.focusProduct(productID);
    this.isAlterProduct = true;
  }

  returnProductToAlter(productID: number): ProductsVM {
    let ret: ProductsVM = this.products.find(p => p.id === productID);
    if (ret == null) {
      ret = this.adminProducts.find(p => p.id === productID);
    }
    return ret;
  }

  showAllProducts($event: boolean) {
    if ($event) {
      this.isAlterProduct = false;
    }
  }

  finishAlteration($event: ProductsVM) {
    const productTemp = $event;
    const product = this.returnProductToAlter(productTemp.id);

    if (product.selling !== productTemp.selling) {
      this.changeTempProductSale(productTemp.id);
    }

    product.name = productTemp.name;
    product.pictureUrl = productTemp.pictureUrl;
    product.price = productTemp.price;
  }

  amountChanged() {
    if (this.amountToAdd < 1 || this.amountToAdd == null) {
      this.amountToAdd = 1;
    }
    this.totalPrice = this.focusedProduct.discountPrice * this.amountToAdd;
  }
}
