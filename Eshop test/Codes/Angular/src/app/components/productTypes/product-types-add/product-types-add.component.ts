import {Component, OnInit} from '@angular/core';
import {ProductTypesService} from '../Services/product-types.service';
import {Router} from '@angular/router';
import {OperState} from '../../../model/OperState';
import {ProductTypeVM} from '../../../model/ProductTypeVM';
import {ProductsVM} from '../../../model/ProductsVM';

@Component({
  selector: 'app-product-types-add',
  templateUrl: './product-types-add.component.html',
  styleUrls: ['./product-types-add.component.css']
})
export class ProductTypesAddComponent implements OnInit {

  private loadingState = new OperState();
  private workinsState = new OperState();
  private productType = new ProductTypeVM();
  private productTypesInDB: ProductTypeVM[];

  constructor(
    private productTypesService: ProductTypesService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loadingState.setWorking();
    this.productTypesService.list().subscribe(
      pt => {
        this.productTypesInDB = pt;
        this.loadingState.setSuccess();
        this.workinsState.setWorking();
      },
      err => {
        this.loadingState.setError(err);
      }
    );
  }

  checkFrom(): boolean {
    if (this.productType.typeName == null || this.productType.typeName.replace(/\s/g, '') === '') {
      return false;
    } else {
      return true;
    }
  }

  checkName(): boolean {
    if (this.productTypesInDB.find(pt => pt.typeName === this.productType.typeName) != null) {
      return false;
    } else {
      return true;
    }
  }

  insertNew() {
    if (!this.checkFrom()) {
      this.workinsState.setError('Špatně vyplněný formulář. Prosím vyplňte všechny pole.');
      return;
    }
    if (!this.checkName()) {
      this.workinsState.setError('Kategorie s tímto jménem již existuje.');
      return;
    }
    this.productTypesService.add(this.productType).subscribe(
      res => {
        this.workinsState.setSuccess();
      }
    );
    this.finish();
  }

  private finish() {
    setTimeout((router: Router) => {
      router.navigate(['/products/1']);
    }, 2000, this.router);
  }
}
