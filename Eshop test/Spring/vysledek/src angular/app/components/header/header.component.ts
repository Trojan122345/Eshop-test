import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../auth/Services/authentication.service';
import {ShoppingCartService} from '../shopping/Services/shopping-cart.service';
import {Router} from '@angular/router';
import {LoginComponent} from '../auth/login/login.component';
import {RegisterCustomerComponent} from '../customers/register-customer/register-customer.component';
import {log} from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itemsInCart: number;
  @ViewChild(LoginComponent, {static: false}) loginComp;
  @ViewChild(RegisterCustomerComponent, {static: false}) registerComp;
  @ViewChild('loginFormCloseButton', {static: true}) loginFormCloseButton: ElementRef;
  @ViewChild('registerFormCloseButton', {static: true}) registerFormCloseButton: ElementRef;
  @ViewChild('loginFormOpenButton', {static: false}) loginFormOpenButton: ElementRef;

  constructor(private loginService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private router: Router) {
    this.shoppingCartService.itemsInCart.subscribe(itemsInCart => this.itemsInCart = itemsInCart);
  }

  ngOnInit() {
    if (this.loginService.isUserLoggedIn()) {
      this.checkLogin();
      this.itemsInCart = this.shoppingCartService.getItemsAmount();
      this.shoppingCartService.itemsInCart.subscribe(itemsInCart => this.itemsInCart = itemsInCart);
    }
  }

  closeLoginFormMessage($event) {
    if ($event) {
      setTimeout((closeButton: ElementRef) => {
          closeButton.nativeElement.click();
        }
        , 1000, this.loginFormCloseButton);
    }
  }

  closeRegisterFormMessage($event) {
    if ($event) {
      setTimeout((closeButton: ElementRef, openButton: ElementRef) => {
          closeButton.nativeElement.click();
          openButton.nativeElement.click();
        }
        , 1000, this.registerFormCloseButton, this.loginFormOpenButton);
    }
  }

  changeAdminMode() {
    this.loginService.changeAdminMode();
  }

  checkLogin() {
    this.loginService.checkToken();
    console.log('check1');
    setTimeout(function func(loginservice: AuthenticationService) {
      if (loginservice.isUserLoggedIn()) {
        loginservice.checkToken();
        console.log('check2');
      }
      setTimeout(func, 1000 * 60, loginservice);
    },
      1000 * 60, this.loginService);
  }
}
