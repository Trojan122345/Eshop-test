import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../Services/authentication.service';
import {Router} from '@angular/router';
import {OperState} from '../../../model/OperState';
import {ShoppingCartService} from '../../shopping/Services/shopping-cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  invalidLogin = false;
  loadingState = new OperState();
  @Output() loginFinished = new EventEmitter<boolean>();

  constructor(private router: Router,
              private loginService: AuthenticationService,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  sendSuccessfulLogin() {
    this.loginFinished.emit(true);
  }

  checkLogin() {
    if (this.username == null || this.password == null) {
      this.loadingState.setError('Prosím vyplňte všechny pole');
    } else {
      this.loadingState.setWorking();
      (this.loginService.authenticate(this.username, this.password).subscribe(
          data => {
            this.router.navigate(['']);
            this.invalidLogin = false;
            this.loadingState.setSuccess();
            this.shoppingCartService.loadCartIDFromDB();
            this.sendSuccessfulLogin();
            this.username = '';
            this.password = '';
            this.setStateBack();
          },
          error => {
            this.invalidLogin = true;
            this.loadingState.setError('Přihlašovací údaje jsou nesprávné');
          }
        )
      );
    }
  }

  setStateBack() {
    setTimeout((state: OperState) => {
      state.setBack();
    }, 1300, this.loadingState);
  }
}


