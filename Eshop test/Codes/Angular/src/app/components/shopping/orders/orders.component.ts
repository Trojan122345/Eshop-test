import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../Services/orders.service';
import {OperState} from '../../../model/OperState';
import {OrdersProductsVM} from '../../../model/OrdersProductsVM';
import {OrderInfo} from '../../../model/OrderInfo';
import {OrderAddrVM} from '../../../model/OrderAddrVM';
import {OrderCompState} from './OrderCompState';
import {ProductsService} from '../../products/Services/products.service';
import {ProductsVM} from '../../../model/ProductsVM';
import {AuthenticationService} from '../../auth/Services/authentication.service';
import {CustomersVM} from '../../../model/CustomersVM';
import {CustomerService} from '../../customers/Services/customer.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderInfos: OrderInfo[] = [];
  adminOrderInfos: OrderInfo[] = [];
  customers: CustomersVM[] = [];
  currentCustomer: CustomersVM;
  loadingState: OperState = new OperState();
  componentState: OrderCompState = new OrderCompState();
  products: ProductsVM[] = [];
  currentProduct: ProductsVM;
  orderID: number;

  constructor(private ordersService: OrdersService,
              private productsService: ProductsService,
              private loginService: AuthenticationService,
              private customerService: CustomerService) {
  }

  ngOnInit() {
    this.loadingState.setWorking();
    this.componentState.setShowAll();
    this.ordersService.getUsersOrders().subscribe(
      orders => {
        let itemsProcessed = 0;
        orders.forEach(o => {
            const info = new OrderInfo();
            info.order = o;
            this.ordersService.getOrderItems(o.id.toString(10)).subscribe(
              res => {
                itemsProcessed++;
                info.items = res;
                this.orderInfos.push(info);
                if (itemsProcessed === orders.length) {
                  this.orderInfos.sort((oi1, oi2) => oi2.order.id - oi1.order.id);
                  this.loadingState.setSuccess();
                }
              },
              err => this.loadingState.setError(err)
            );
          });
      },
      err => this.loadingState.setError(err)
    );

    this.loadingState.setWorking();
    this.productsService.listAll(true).subscribe(
      res => {
        this.products = res;
        this.loadingState.setSuccess();
      },
      err => this.loadingState.setError(err)
    );

    if (this.loginService.isUserAdmin()) {
      this.loadingState.setWorking();
      this.ordersService.getAllOrders().subscribe(
        orders => {
          let itemsProcessed = 0;
          orders.forEach(o => {
            const info = new OrderInfo();
            info.order = o;
            this.ordersService.getOrderItems(o.id.toString(10)).subscribe(
              res => {
                itemsProcessed++;
                info.items = res;
                this.adminOrderInfos.push(info);
                if (itemsProcessed === orders.length) {
                  this.orderInfos.sort((oi1, oi2) => oi2.order.id - oi1.order.id);
                  this.loadingState.setSuccess();
                }
              },
              err => this.loadingState.setError(err)
            );
          });
        },
        err => this.loadingState.setError(err)
      );
      this.customerService.list().subscribe(
        res => this.customers = res,
        err => this.loadingState.setError(err)
      );
    }
  }

  private getTotalOrderPrice(ordersProducts: OrdersProductsVM[]): number {
    let totalPrice = 0;
    ordersProducts.forEach(op => totalPrice += op.pricePerProduct * op.amount);
    return totalPrice;
  }

  public addressToString(address: OrderAddrVM): string {
    return address.street + ', ' + address.city + ', ' + address.psc;
  }

  private orderOut(orderID: number) {
    this.orderID = orderID;
    this.componentState.setShowOne();
    if (this.loginService.isAdminMode()) {
      this.currentCustomer = this.customers.find(
        c => c.id === this.adminOrderInfos.find(
          oi => oi.order.id === this.orderID
        ).order.customerId);
    }
  }

  private getCurrentOrder(): OrdersProductsVM[] {
    if (this.orderInfos.findIndex(oi => oi.order.id === this.orderID) < 0) {
      return this.adminOrderInfos[this.adminOrderInfos.findIndex(oi => oi.order.id === this.orderID)].items;
    } else {
      return this.orderInfos[this.orderInfos.findIndex(oi => oi.order.id === this.orderID)].items;
    }
  }

  loadProduct(currentID) {
    this.currentProduct = this.products.find(p => p.id === currentID);
  }

  getAllOrders() {
    this.componentState.setShowAll();
    this.orderID = null;
  }

  getCustomerStringByID(customerID: number) {
    const tempCust: CustomersVM = this.customers.find(c => c.id === customerID);
    return tempCust.name + ' ' + tempCust.surname;
  }
}
