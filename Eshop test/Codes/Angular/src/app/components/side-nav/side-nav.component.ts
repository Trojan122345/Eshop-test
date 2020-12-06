import { Component, OnInit } from '@angular/core';
import {ProductTypesService} from '../productTypes/Services/product-types.service';
import {ProductTypeVM} from '../../model/ProductTypeVM';
import {OperState} from '../../model/OperState';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  private productTypes: ProductTypeVM[];
  private loadingState = new OperState();

  constructor(private productTypesService: ProductTypesService) { }

  ngOnInit() {
    this.productTypesService.list().subscribe(
      res => {
        this.productTypes = res;
      },
      err => {
        this.loadingState.setError(err);
      }
    );
  }

}
