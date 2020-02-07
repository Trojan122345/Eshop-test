import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomersVM} from '../../../model/CustomersVM';
import {ProductsVM} from '../../../model/ProductsVM';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL_BASE = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {
  }

  public get(id: string): Observable<CustomersVM> {
    const url = this.buildUrl('/get');
    const httpParams = new HttpParams().set('id', id);
    return this.http.get<CustomersVM>(url, {params: httpParams});
  }

  public register(item: CustomersVM, rawPass: string): Observable<number> {
    const url = this.buildUrl('/create');
    const param = new HttpParams().set('rawPass', rawPass);
    const body = item;
    return this.http.post<number>(url, body, {params: param});
  }

  public list(): Observable<CustomersVM[]> {
    const url = this.buildUrl('/list');
    return this.http.get<CustomersVM[]>(url);
  }

  private buildUrl(relativeUrl: string): string {
    return this.URL_BASE + relativeUrl;
  }
}
