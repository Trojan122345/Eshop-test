import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OperState} from '../../../model/OperState';
import {CustomersVM} from '../../../model/CustomersVM';
import {CustomerService} from '../Services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  customerNew: CustomersVM = new CustomersVM();
  rawPassword: string;
  rawPasswordControl: string;
  loadingState = new OperState();
  @Output() registerFinished = new EventEmitter<boolean>();

  constructor(
    private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  insertNew(): void {
    if (this.checkForm()) {
      this.loadingState.setWorking();
      this.customerService.register(this.customerNew, this.rawPassword).subscribe(
        res => {
          this.loadingState.setSuccess();
          this.sendSuccessfulRegistration();
          this.setStateBack();
          this.customerNew = new CustomersVM();
          this.rawPasswordControl = '';
          this.rawPassword = '';
        },
        err => {
          this.loadingState.setError('Registrace selhala');
          console.log(err);
        }
      );
    }
  }

  sendSuccessfulRegistration() {
    this.registerFinished.emit(true);
  }

  checkForm(): boolean {
    if (this.customerNew.name == null || this.customerNew.username == null ||
      this.customerNew.email == null || this.customerNew.surname == null ||
      this.rawPassword == null || this.rawPasswordControl == null) {
      this.loadingState.setError('Prosím vyplňte všechny pole');
      return false;
    }
    if (!this.validateEmail(this.customerNew.email)) {
      this.loadingState.setError('E-mail má špatný tvar');
      return false;
    }
    if (this.rawPassword !== this.rawPasswordControl) {
      this.loadingState.setError('Hesla se musí shodovat');
      return false;
    }
    return true;
  }

  validateEmail(email: string) {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(email);
  }

  setStateBack() {
    setTimeout((state: OperState) => {
      state.setBack();
    }, 1300, this.loadingState);
  }
}
