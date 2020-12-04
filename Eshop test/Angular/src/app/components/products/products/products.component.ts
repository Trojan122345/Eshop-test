import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OperState} from '../../../model/OperState';
import {ProductsService} from '../Services/products.service';
import {ProductsVM} from '../../../model/ProductsVM';
import {ShoppingCartService} from '../../shopping/Services/shopping-cart.service';
import {AuthenticationService} from '../../auth/Services/authentication.service';
import {log} from 'util';
import {ProductTypeVM} from '../../../model/ProductTypeVM';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductTypesService} from '../../productTypes/Services/product-types.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ITEMSPERPAGE = 3;

  private productType: ProductTypeVM;
  private loadingProductState = new OperState();
  private loadingTypeState = new OperState();
  private loadingMoreProductsState = new OperState();
  private products: ProductsVM[] = [];
  private adminProducts: ProductsVM[] = [];
  private pages: number[] = [];
  private showAdminProducts = false;
  private focusedProduct: ProductsVM;
  private amountToAdd = 1;
  private currentPage: number;
  private totalPrice: number;

  constructor(private productService: ProductsService,
              private productTypesService: ProductTypesService,
              private shoppingCartService: ShoppingCartService,
              private loginService: AuthenticationService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.showAdminProducts = false;
    this.loadAll();
  }

  loadAll() {
    this.loadingTypeState.setWorking();
    this.loadingProductState.setWorking();
    this.activatedRoute.params.subscribe(
      params => {
        this.productTypesService.get(params.productID).subscribe(
          productType => {
            this.productType = productType;
            this.productTypesService.getCount(JSON.stringify(this.productType.id), !this.showAdminProducts).subscribe(
              count => {
                this.fillPages(count);
                this.loadPage(1);
                this.loadingTypeState.setSuccess();
              },
              err => this.loadingTypeState.setError(err)
            );
          },
          err => this.loadingTypeState.setError(err)
        );
      },
      err => this.loadingTypeState.setError(err)
    );
  }

  changeShowAdminProducts() {
    this.showAdminProducts = !this.showAdminProducts;
    this.loadAll();
  }

  private loadProducts(startIndex: number, count: number): Observable<ProductsVM[]> {
    return this.productService.list(
      JSON.stringify(startIndex),
      JSON.stringify(count),
      JSON.stringify(this.productType.id), !this.showAdminProducts);
  }

  loadMore() {
    const start = (this.currentPage) * this.ITEMSPERPAGE;
    this.loadingMoreProductsState.setWorking();
    this.loadProducts(start, this.ITEMSPERPAGE).subscribe(
      tempList => {
        for (const product of tempList) {
          this.products.push(product);
        }
        this.currentPage++;
        this.loadingMoreProductsState.setSuccess();
      }
    );
  }

  loadPage(page: number) {
    this.currentPage = page;
    this.products = [];
    const start = (page - 1) * this.ITEMSPERPAGE;
    this.loadingProductState.setWorking();
    this.loadProducts(start, this.ITEMSPERPAGE).subscribe(
      products => {
        this.products = products;
        this.loadingProductState.setSuccess();
      }
    );
  }

  fillPages(totalCount: number) {
    this.pages = [];
    for (let i = 0; i < totalCount / this.ITEMSPERPAGE; i++) {
      this.pages.push(i + 1);
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
    // this.fillPages();
    this.loadPage(this.currentPage);
  }

  putProductOut() {
    this.productService.putOutOfSale(this.focusedProduct.id).subscribe(
      res => this.changeTempProductSale(this.focusedProduct.id),
      err => this.loadingProductState.setError(err)
    );
  }

  putProductBack() {
    this.productService.putOnSale(this.focusedProduct.id).subscribe(
      res => this.changeTempProductSale(this.focusedProduct.id),
      err => this.loadingProductState.setError(err)
    );
  }

  alterProduct(productID: number) {
    this.router.navigate(['products/alter', productID]);
  }

  amountChanged() {
    if (this.amountToAdd < 1 || this.amountToAdd == null) {
      this.amountToAdd = 1;
    }
    this.totalPrice = this.focusedProduct.discountPrice * this.amountToAdd;
  }
}
