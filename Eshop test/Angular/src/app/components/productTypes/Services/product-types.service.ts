import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductTypeVM} from '../../../model/ProductTypeVM';

@Injectable({
  providedIn: 'root'
})
export class ProductTypesService {
  private URL_BASE = 'http://localhost:8080/api/productTypes';

  constructor(private http: HttpClient) {
  }

  private buildUrl(relativeUrl: string) {
    return this.URL_BASE + relativeUrl;
  }

  public get(id: string): Observable<ProductTypeVM> {
    const url = this.buildUrl('/get');
    const httpParams = new HttpParams().set('id', id);

    return this.http.get<ProductTypeVM>(url, {params: httpParams});
  }

  public add(item: ProductTypeVM): Observable<ProductTypeVM> {
    const url = this.buildUrl('/add');

    return this.http.post<ProductTypeVM>(url, item);
  }

  public update(item: ProductTypeVM): Observable<void> {
    const url = this.buildUrl('/update');

    return this.http.patch<void>(url, item);
  }

  public list(): Observable<ProductTypeVM[]> {
    const url = this.buildUrl('/list');

    return this.http.get<ProductTypeVM[]>(url);
  }
}
