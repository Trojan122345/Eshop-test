import {Component, OnInit} from '@angular/core';
import {OperState} from '../../../model/OperState';
import {CustomersVM} from '../../../model/CustomersVM';
import {CustomerService} from '../Services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  loadingState = new OperState();
  customers: CustomersVM[] = [];

  constructor(private customersService: CustomerService) {
  }

  ngOnInit() {
    this.loadingState.setWorking();
    this.customersService.list().subscribe(
      res => {
        this.customers = res;
        this.loadingState.setSuccess();
      },
      err => this.loadingState.setError(err)
    );
  }
}
