import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from './components/products/products/products.component';
import {CustomersComponent} from './components/customers/customers/customers.component';
import {ProductsAddComponent} from './components/products/products-add/products-add.component';
import {RegisterCustomerComponent} from './components/customers/register-customer/register-customer.component';
import {LogoutComponent} from './components/auth/logout/logout.component';
import {AuthGuardUserService} from './components/auth/Services/AuthGuard/auth-guard-user.service';
import {AuthGuardAdminService} from './components/auth/Services/AuthGuard/auth-guard-admin.service';
import {CartComponent} from './components/shopping/cart/cart.component';
import {OrdersComponent} from './components/shopping/orders/orders.component';
import {InvalidTokenComponent} from './components/auth/invalid-token/invalid-token.component';
import {DiscountsComponent} from './components/discounts/discounts/discounts.component';
import {DiscountsAddComponent} from './components/discounts/discounts-add/discounts-add.component';
import {ProductAlterComponent} from './components/products/product-alter/product-alter.component';
import {ProductTypesAlterComponent} from './components/productTypes/product-types-alter/product-types-alter.component';
import {ProductTypesAddComponent} from './components/productTypes/product-types-add/product-types-add.component';
import {ProductTypesComponent} from './components/productTypes/product-types/product-types.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/products/1'},
  {path: 'products/add', component: ProductsAddComponent, canActivate: [AuthGuardAdminService]},
  {path: 'products/:productID', component: ProductsComponent},
  {path: 'products/alter/:id', component: ProductAlterComponent, canActivate: [AuthGuardAdminService]},
  {path: 'customers', component: CustomersComponent, canActivate: [AuthGuardAdminService]},
  {path: 'customers/register', component: RegisterCustomerComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardUserService]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuardUserService]},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuardUserService]},
  {path: 'loginExpired', component: InvalidTokenComponent},
  {path: 'discounts', component: DiscountsComponent, canActivate: [AuthGuardAdminService]},
  {path: 'discounts/add', component: DiscountsAddComponent, canActivate: [AuthGuardAdminService]},
  {path: 'categories/alter', component: ProductTypesAlterComponent, canActivate: [AuthGuardAdminService]},
  {path: 'categories/add', component: ProductTypesAddComponent, canActivate: [AuthGuardAdminService]},
  {path: 'categories', component: ProductTypesComponent, canActivate: [AuthGuardAdminService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
