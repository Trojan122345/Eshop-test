import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../products/Services/products.service';
import {DiscountsService} from '../Services/discounts.service';
import {OperState} from '../../../model/OperState';
import {DiscountAddCompState} from './DiscountAddCompState';
import {ProductsVM} from '../../../model/ProductsVM';
import {DiscountsVM} from '../../../model/DiscountsVM';
import {Router} from '@angular/router';

@Component({
  selector: 'app-discounts-add',
  templateUrl: './discounts-add.component.html',
  styleUrls: ['./discounts-add.component.css']
})
export class DiscountsAddComponent implements OnInit {
  loadingState: OperState = new OperState();
  componentState: DiscountAddCompState = new DiscountAddCompState();
  products: ProductsVM[] = [];
  selectedProduct: ProductsVM;

  discountPercent: number;
  discountPrice: number;

  finishedDiscount: DiscountsVM;

  min: string = new Date().toJSON().slice(0, 10);
  dateFrom: string = this.min;
  dateTo: string = this.min;

  constructor(private productsService: ProductsService,
              private discountsService: DiscountsService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadingState.setWorking();
    this.productsService.listSelling().subscribe(
      products => {
        this.products = products;
        this.loadingState.setSuccess();
        this.selectedProduct = this.products[0];
      },
      err => this.loadingState.setError(err)
    );
    this.discountPercent = 0;
    this.componentState.setCreate();
  }

  getDateFromString(date: string) {
    return new Date(date);
  }

  selectProductCreating(event: any) {
    const productID: number = parseInt(event.target.value, 10);
    this.selectedProduct = this.products.find(p => p.id === productID);
    this.updateDiscountProductChange();
  }

  updateDiscountProductChange() {
    this.discountPrice = this.selectedProduct.price - (this.selectedProduct.price * this.discountPercent / 100);
  }

  updateDiscount(event: any) {
    this.discountPercent = parseInt(event.target.value, 10);
    this.discountPrice = (this.selectedProduct.price * (1 - (this.discountPercent / 100)));
  }

  checkDateTo() {
    const from = new Date(this.dateFrom);
    const to = new Date(this.dateTo);
    if (from > to) {
      this.dateTo = this.dateFrom;
    }
  }

  createDiscount() {
    console.log(this.checkDate());
    console.log(this.discountPercent);
    if (this.checkDate() && this.discountPercent > 0) {
      const discount = new DiscountsVM();
      discount.productId = this.selectedProduct.id;
      discount.percent = this.discountPercent;
      discount.dateto = new Date(this.dateTo);
      discount.datefrom = new Date(this.dateFrom);

      this.loadingState.setWorking();
      this.discountsService.create(discount).subscribe(
        res => {
          this.loadingState.setSuccess();
          this.finishedDiscount = this.discountsService.getDiscountFromReturn(res);
          this.selectedProduct = this.products.find(p => p.id === this.finishedDiscount.productId);
          this.discountPercent = this.finishedDiscount.percent;
          this.updateDiscountProductChange();
          this.componentState.setShowFinishedDiscount();
          this.showAll();
        },
        err => {
          this.loadingState.setError(err);
          console.log(err);
        }
      );
    } else {
      this.componentState.setBadDiscount();
    }
  }

  checkDate(): boolean {
    const from = new Date(this.dateFrom);
    const to = new Date(this.dateTo);
    const now = new Date(JSON.stringify(new Date()).substr(1, 10));
    if (from.getTime() > to.getTime() || from.getTime() < now.getTime() || to.getTime() < now.getTime()) {
      return false;
    } else {
      return true;
    }
  }

  showAll() {
    setTimeout((router: Router) => {
      router.navigate(['discounts'])}, 2000, this.router
    );
  }
}
