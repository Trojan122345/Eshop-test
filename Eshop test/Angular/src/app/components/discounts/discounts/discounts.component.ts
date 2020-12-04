import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../products/Services/products.service';
import {DiscountsService} from '../Services/discounts.service';
import {ProductsVM} from '../../../model/ProductsVM';
import {OperState} from '../../../model/OperState';
import {DiscountsVM} from '../../../model/DiscountsVM';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {
  loadingState: OperState = new OperState();
  products: ProductsVM[] = [];
  selectedProduct: ProductsVM;
  discountsOnGoing: DiscountsVM[] = [];
  discountsPast: DiscountsVM[] = [];
  discountsFuture: DiscountsVM[] = [];
  discountsAll: DiscountsVM[] = [];

  discountPercent: number;
  discountPrice: number;
  isAlterDiscount: boolean;
  focusedDiscount: DiscountsVM;

  constructor(private productsService: ProductsService,
              private discountsService: DiscountsService) {
  }

  ngOnInit() {
    this.loadingState.setWorking();
    this.discountsService.list().subscribe(
      discounts => {
        discounts.map<DiscountsVM>(d => this.discountsService.getDiscountFromReturn(d))
          .forEach(d => {
            this.addDiscount(d);
            this.discountsAll.push(d);
          });
        this.productsService.listAll(true).subscribe(
          products => {
            this.products = products;
            this.loadingState.setSuccess();
            this.selectedProduct = this.products[0];
          },
          err => this.loadingState.setError(err)
        );
      },
      err => this.loadingState.setError(err)
    );
    this.discountPercent = 0;
  }

  updateSelectedDiscount(discount: DiscountsVM) {
    this.discountPercent = discount.percent;
    this.selectedProduct = this.products.find(p => p.id === discount.productId);
    this.discountPrice = this.selectedProduct.price - (this.selectedProduct.price * this.discountPercent / 100);
  }

  alterDiscount(discountID: number) {
    this.focusedDiscount = this.discountsFuture.find(d => d.id === discountID);
    this.selectedProduct = this.products.find(p => p.id === this.focusedDiscount.productId);
    this.isAlterDiscount = true;
  }

  finishAlteration($event: DiscountsVM) {
    const discountTemp = $event;
    const discount = this.discountsFuture.find(d => d.id === discountTemp.id);

    discount.percent = discountTemp.percent;
    discount.datefrom = discountTemp.datefrom;
    discount.dateto = discountTemp.dateto;
  }

  showAllDiscounts($event: boolean) {
    this.isAlterDiscount = false;
  }

  addDiscount(discount: DiscountsVM) {
    const today = new Date(new Date().toJSON().slice(0, 10));
    if (discount.datefrom <= today) {
      if (discount.dateto >= today) {
        this.discountsOnGoing.push(discount);
      } else {
        this.discountsPast.push(discount);
      }
    } else {
      this.discountsFuture.push(discount);
    }
  }

  prepareModalDelete(dicsountID: number) {
    this.focusedDiscount = this.discountsFuture.find(d => d.id === dicsountID);
  }

  deleteDiscount(discountID: number) {
    this.discountsService.delete(discountID).subscribe(
      res => {
        this.discountsFuture.splice(
          this.discountsFuture.findIndex(d => d.id === discountID), 1
        );
      }
    );
  }

  loadProductDiscounts(event: any) {
    const productID: number = parseInt(event.target.value, 10);
    this.discountsFuture = [];
    this.discountsOnGoing = [];
    this.discountsPast = [];
    if (productID >= 0) {
      this.discountsAll.filter(d => d.productId === productID)
        .forEach(d => this.addDiscount(d));
    } else {
      this.discountsAll.forEach(d => this.addDiscount(d));
    }
  }
}
