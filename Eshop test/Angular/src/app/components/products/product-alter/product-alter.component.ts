import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsVM} from '../../../model/ProductsVM';
import {ProductsService} from '../Services/products.service';
import {OperState} from '../../../model/OperState';

@Component({
  selector: 'app-product-alter',
  templateUrl: './product-alter.component.html',
  styleUrls: ['./product-alter.component.css']
})
export class ProductAlterComponent implements OnInit {
  @Input('productToAlter') originalProduct: ProductsVM;
  @Output() showAll = new EventEmitter<boolean>();
  alteredProduct: ProductsVM = new ProductsVM();
  loadingState: OperState = new OperState();
  @Output() finishedAlterProduct = new EventEmitter<ProductsVM>();

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.alteredProduct.id = this.originalProduct.id;
    this.alteredProduct.name = this.originalProduct.name;
    this.alteredProduct.price = this.originalProduct.price;
    this.alteredProduct.pictureUrl = this.originalProduct.pictureUrl;
    this.alteredProduct.selling = this.originalProduct.selling;
  }

  test() {
    console.log(this.originalProduct);
  }

  showAllProducts() {
    this.showAll.emit(true);
  }

  alterProduct() {
    this.productsService.alterProduct(this.alteredProduct).subscribe(
      res => {
        this.loadingState.setSuccess();
        this.finishedAlterProduct.emit(this.alteredProduct);
        setTimeout((showAll: EventEmitter<boolean>) => {
          showAll.emit(true);
        }, 2000, this.showAll);
      },

      err => this.loadingState.setError(err)
    );
  }

}
