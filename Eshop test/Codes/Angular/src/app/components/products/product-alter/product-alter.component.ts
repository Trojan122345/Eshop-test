import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsVM} from '../../../model/ProductsVM';
import {ProductsService} from '../Services/products.service';
import {OperState} from '../../../model/OperState';
import {ProductTypeVM} from '../../../model/ProductTypeVM';
import {ProductTypesService} from '../../productTypes/Services/product-types.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-alter',
  templateUrl: './product-alter.component.html',
  styleUrls: ['./product-alter.component.css']
})
export class ProductAlterComponent implements OnInit {
  @Input('productToAlter') originalProduct: ProductsVM;
  @Output() showAll = new EventEmitter<boolean>();
  private productTypes: ProductTypeVM[];
  private productToAlter: ProductsVM = new ProductsVM();
  private loadingState: OperState = new OperState();
  private sendingState: OperState = new OperState();
  @Output() finishedAlterProduct = new EventEmitter<ProductsVM>();

  constructor(private productsService: ProductsService,
              private productTypesService: ProductTypesService,
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.loadingState.setWorking();
    this.activatedRoute.params.subscribe(params => {
      this.productsService.get(params.id).subscribe(
        product => {
          this.productToAlter = product;
          this.productTypesService.list().subscribe(
            res => {
              this.productTypes = res;
              this.loadingState.setSuccess();
            },
            err => {
              this.loadingState.setError(err);
            }
          );
        },
        err => this.loadingState.setError(err)
      );
    });
  }

  test() {
    console.log(this.originalProduct);
  }

  showAllProducts() {
    this.showAll.emit(true);
  }

  changeProductType(event: any) {
    this.productToAlter.productTypeId = parseInt(event.target.value, 10);
  }

  alterProduct() {
    this.sendingState.setWorking();
    this.productsService.alterProduct(this.productToAlter).subscribe(
      res => {
        this.sendingState.setSuccess();
        // this.finishedAlterProduct.emit(this.productToAlter);
        /*setTimeout((showAll: EventEmitter<boolean>) => {
          showAll.emit(true);
        }, 2000, this.showAll);*/
      },

      err => this.loadingState.setError(err)
    );
  }

}
