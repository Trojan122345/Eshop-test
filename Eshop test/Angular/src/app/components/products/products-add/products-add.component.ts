import {Component, OnInit} from '@angular/core';
import {ProductsVM} from '../../../model/ProductsVM';
import {OperState} from '../../../model/OperState';
import {ProductsService} from '../Services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductTypesService} from '../../productTypes/Services/product-types.service';
import {ProductTypeVM} from '../../../model/ProductTypeVM';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  product: ProductsVM = new ProductsVM();
  productTypes: ProductTypeVM[];
  loadingState = new OperState();
  finished: boolean;

  constructor(
    private productsService: ProductsService,
    private productTypesService: ProductTypesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.productTypesService.list().subscribe(
      res => {
        this.productTypes = res;
        this.loadingState.setWorking();
      },
      err => {
        this.loadingState.setError(err);
      }
    );
  }

  checkForm(): boolean {
    if (this.product.name == null || this.product.price == null || this.product.pictureUrl == null || this.product.price <= 0) {
      return false;
    }
    return true;
  }

  insertNew(): void {
    if (this.product.id) {
      console.log('Error: not a new item, cannot be inserted.');
      return;
    }
    if (!this.checkForm()) {
      this.loadingState.setError('Špatně vyplněný formulář. Prosím, vyplňte všechny pole.');
    } else {
      this.loadingState.setWorking();
      this.productsService.add(this.product).subscribe(
        res => {
          this.loadingState.setSuccess();
          this.finish(res);
        },
        err => {
          this.loadingState.setError('Špatné spojení se serverem');
          console.log(err);
        }
      );
    }
  }

  private finish(finishedProduct: ProductsVM) {
    this.finished = true;
    this.product = finishedProduct;
    setTimeout((router: Router) => {
      router.navigate(['/products']);
    }, 2000, this.router);
  }
}
