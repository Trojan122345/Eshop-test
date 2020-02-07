import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OperState} from '../../../model/OperState';
import {DiscountsService} from '../Services/discounts.service';
import {DiscountsVM} from '../../../model/DiscountsVM';
import {ProductsVM} from '../../../model/ProductsVM';
import {ProductsService} from '../../products/Services/products.service';

@Component({
  selector: 'app-discounts-alter',
  templateUrl: './discounts-alter.component.html',
  styleUrls: ['./discounts-alter.component.css']
})
export class DiscountsAlterComponent implements OnInit {
  loadingState: OperState = new OperState();
  @Input('discountToAlter') originalDiscount: DiscountsVM;
  @Input('selectedProduct') productToDiscount: ProductsVM;
  @Output() finishedAlterDiscount = new EventEmitter<DiscountsVM>();
  @Output() showAll = new EventEmitter<boolean>();
  discountPrice: number;
  alteredDiscount: DiscountsVM;

  min: string = new Date().toJSON().slice(0, 10);

  constructor(private discountsService: DiscountsService,
              private productsService: ProductsService) {
  }

  ngOnInit() {
    this.alteredDiscount = this.originalDiscount;
    this.discountPrice = this.productToDiscount.price * (1 - (this.alteredDiscount.percent / 100));
  }

  updateDiscount(event: any) {
    this.alteredDiscount.percent = parseInt(event.target.value, 10);
    this.discountPrice = this.productToDiscount.price * (1 - (this.alteredDiscount.percent / 100));
  }

  changeDateFrom(event: any) {
    this.alteredDiscount.datefrom = new Date(event.target.value);
    this.checkDateTo();
  }

  private checkDateTo() {
    if (this.alteredDiscount.datefrom > this.alteredDiscount.dateto) {
      this.alteredDiscount.dateto = this.alteredDiscount.datefrom;
    }
  }

  changeDateTo(event: any) {
    this.alteredDiscount.dateto = new Date(event.target.value);
  }

  getMinDateTo(): string {
    return this.alteredDiscount.datefrom.toJSON().slice(0, 10);
  }

  alterDiscount() {
    this.discountsService.alterDiscount(this.alteredDiscount).subscribe(
      res => {
        this.loadingState.setSuccess();
        this.finishedAlterDiscount.emit(this.alteredDiscount);
        setTimeout((showAll: EventEmitter<boolean>) => {
          showAll.emit(true);
        }, 2000, this.showAll);
      },
      err => this.loadingState.setError(err)
    );
  }

  showAllDiscounts() {
    this.showAll.emit(true);
  }
}
