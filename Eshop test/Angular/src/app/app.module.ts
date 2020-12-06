import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers/customers.component';
import { HeaderComponent } from './components/header/header.component';
import { InvalidTokenComponent } from './components/auth/invalid-token/invalid-token.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { RegisterCustomerComponent } from './components/customers/register-customer/register-customer.component';
import { ProductsAddComponent } from './components/products/products-add/products-add.component';
import { ProductsComponent } from './components/products/products/products.component';
import { ProductAlterComponent } from './components/products/product-alter/product-alter.component';
import { CartComponent } from './components/shopping/cart/cart.component';
import { OrdersComponent } from './components/shopping/orders/orders.component';
import { BasicAuthInterceptionService } from './components/auth/Services/basic-auth-interception.service';
import { AppRoutingModule } from './app-routing.module';
import { DiscountsComponent } from './components/discounts/discounts/discounts.component';
import { DiscountsAddComponent } from './components/discounts/discounts-add/discounts-add.component';
import { DiscountsAlterComponent } from './components/discounts/discounts-alter/discounts-alter.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';import { ProductTypesAlterComponent } from './components/productTypes/product-types-alter/product-types-alter.component';
import { ProductTypesAddComponent } from './components/productTypes/product-types-add/product-types-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HeaderComponent,
    InvalidTokenComponent,
    LoginComponent,
    LogoutComponent,
    RegisterCustomerComponent,
    ProductsAddComponent,
    ProductsComponent,
    ProductAlterComponent,
    CartComponent,
    OrdersComponent,
    DiscountsComponent,
    DiscountsAddComponent,
    DiscountsAlterComponent,
    SideNavComponent,
    ProductTypesAlterComponent,
    ProductTypesAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptionService, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
