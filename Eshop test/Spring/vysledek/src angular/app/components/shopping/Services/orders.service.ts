import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrdersVM} from '../../../model/OrdersVM';
import {OrdersProductsVM} from '../../../model/OrdersProductsVM';
import {OrderAddrVM} from '../../../model/OrderAddrVM';
import {ProductsVM} from '../../../model/ProductsVM';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private URL_BASE = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {
  }

  public get(orderID: string): Observable<OrdersVM> {
    const url = this.buildUrl('/get');
    const httpParams = new HttpParams().set('orderID', orderID);
    return this.http.get<OrdersVM>(url, {params: httpParams});
  }

  public getUsersCartID(): Observable<number> {
    const url = this.buildUrl('/getCartID');
    const httpParams = new HttpParams().set('username', sessionStorage.getItem('username'));
    return this.http.get<number>(url, {params: httpParams});
  }

  public emptyCart() {
    const url = this.buildUrl('/emptyCart');
    const param: HttpParams = new HttpParams().set('username', sessionStorage.getItem('username'));

    this.http.delete(url, {params: param}).subscribe();
  }

  public getUsersOrders(): Observable<OrdersVM[]> {
    const url = this.buildUrl('/listByUsername');
    const param = new HttpParams().set('username', sessionStorage.getItem('username'));

    return this.http.get<OrdersVM[]>(url, {params: param});
  }

  public getOrderItems(orderID: string): Observable<OrdersProductsVM[]> {
    const url = this.buildUrl('/itemsList');

    const param = new HttpParams().set('orderID', orderID);

    return this.http.get<OrdersProductsVM[]>(url, {params: param});
  }

  public getAllOrders(): Observable<OrdersVM[]> {
    const url = this.buildUrl('/listUnfinished');

    return this.http.get<OrdersVM[]>(url);
  }

  public addToCart(cartItem: OrdersProductsVM): Observable<number> {
    const url = this.buildUrl('/addToCart');
    const param = new HttpParams().set('username', sessionStorage.getItem('username'));

    return this.http.post<number>(url, cartItem, {params: param});
  }

  public updateCartItemAmount(productID: string, newAmount: string){
    const url = this.buildUrl('/updateCartItemAmount');
    const param: HttpParams = new HttpParams().set('username', sessionStorage.getItem('username'))
      .append('productID', productID)
      .append('newAmount', newAmount);

    this.http.patch(url, null, {params: param}).subscribe();
  }

  public orderCart(address: OrderAddrVM): Observable<OrdersVM> {
    const url = this.buildUrl('/order');
    const body = address;
    const param = new HttpParams().set('username', sessionStorage.getItem('username'));

    return this.http.post<OrdersVM>(url, body, {params: param});
  }

  private buildUrl(relativeUrl: string) {
    return this.URL_BASE + relativeUrl;
  }
}
