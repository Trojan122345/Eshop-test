import {Injectable} from '@angular/core';
import {Observable, observable} from 'rxjs';
import {ProductsVM} from '../../../model/ProductsVM';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL_BASE = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {
  }

  public get(id: string): Observable<ProductsVM> {
    const url = this.buildUrl('/get');
    const httpParams = new HttpParams().set('id', id);
    return this.http.get<ProductsVM>(url, {params: httpParams});
  }

  public add(item: ProductsVM): Observable<ProductsVM> {
    const url = this.buildUrl('/add');

    return this.http.post<ProductsVM>(url, item);
  }

  public listSelling(): Observable<ProductsVM[]> {
    const url = this.buildUrl('/listSelling');
    return this.http.get<ProductsVM[]>(url);
  }

  public listNotSelling(): Observable<ProductsVM[]> {
    const url = this.buildUrl('/listNotSelling');
    return this.http.get<ProductsVM[]>(url);
  }

  private buildUrl(relativeUrl: string): string {
    return this.URL_BASE + relativeUrl;
  }

  public getPictureUrl(product: ProductsVM): string {
    const url = product.pictureUrl;
    const regExp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    if (url == null || !url.match(regExp)) {
      return 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg';
    } else {
      return product.pictureUrl;
    }
  }

  putOutOfSale(productID: number): Observable<void> {
    const url = this.buildUrl('/putOutOfSale');
    const param = new HttpParams().set('productID', JSON.stringify(productID));

    return this.http.patch<void>(url, null, {params: param});
  }

  putOnSale(productID: number): Observable<void> {
    const url = this.buildUrl('/putOnSale');
    const param = new HttpParams().set('productID', JSON.stringify(productID));

    return this.http.patch<void>(url, null, {params: param});
  }

  alterProduct(product: ProductsVM): Observable<void> {
    const url = this.buildUrl('/update');

    return this.http.patch<void>(url, product);
  }
}
