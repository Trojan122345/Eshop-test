import {Component, OnInit} from '@angular/core';
import {ProductTypeVM} from '../../../model/ProductTypeVM';
import {OperState} from '../../../model/OperState';
import {ProductTypesService} from '../Services/product-types.service';

@Component({
  selector: 'app-product-types-alter',
  templateUrl: './product-types-alter.component.html',
  styleUrls: ['./product-types-alter.component.css']
})
export class ProductTypesAlterComponent implements OnInit {

  private productTypes: ProductTypeVM[];
  private loadingState = new OperState();
  private changingIndex = -1;
  private workingOn = -1;

  constructor(private productTypesService: ProductTypesService,
  ) {
  }

  ngOnInit() {
    this.loadingState.setWorking();
    this.productTypesService.list().subscribe(
      ptList => {
        this.productTypes = ptList;
        this.loadingState.setSuccess();
      },
      err => this.loadingState.setError(err)
    );
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  changingType(index: number) {
    this.changingIndex = index;
  }

  saveChanges(index: number) {
    const type = this.productTypes[index];
    this.workingOn = index;
    this.productTypesService.update(type).subscribe(
      res => {
        this.workingOn = -1;
        this.changingIndex = -1;
      }
    );
  }
}
