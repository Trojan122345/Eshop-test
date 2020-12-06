import {Injectable} from '@angular/core';
import {DiscountsVM} from '../../../model/DiscountsVM';
import {HttpClient, HttpParams} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountsService {
  private URL_BASE = 'http://localhost:8080/api/discounts';

  constructor(private http: HttpClient) {
  }

  discountToJSON(disc: DiscountsVM): string {
    let ret = JSON.stringify(disc);
    const toReplace = ret.substr(ret.search('datefrom') + 10 + 11, 14);
    ret = ret.replace(toReplace, '');
    ret = ret.replace(toReplace, '');
    return ret;
  }

  create(discount: DiscountsVM): Observable<DiscountsVM> {
    const url = this.buildUrl('/create');
    const param = new HttpParams().set('discountString', this.discountToJSON(discount));

    return this.http.post<DiscountsVM>(url, null, {params: param});
  }

  test(discount: DiscountsVM): Observable<DiscountsVM> {
    const url = this.buildUrl('/test');
    const param = new HttpParams().set('discountString', this.discountToJSON(discount));

    return this.http.get<DiscountsVM>(url, {params: param});
  }

  list(): Observable<DiscountsVM[]> {
    const url = this.buildUrl('/list');

    return this.http.get<DiscountsVM[]>(url);
  }

  private buildUrl(relativeUrl: string) {
    return this.URL_BASE + relativeUrl;
  }

  getDiscountFromReturn(disc: DiscountsVM) {
    const ret = disc;
    ret.datefrom = new Date(disc.datefrom);
    ret.dateto = new Date(disc.dateto);
    return ret;
  }

  dateToUserFriendlyStr(date: Date) {
    return date.getDate() + '. ' + (date.getMonth() + 1) + '. ' + date.getFullYear();
  }

  delete(discountID: number) {
    const url = this.buildUrl('/delete');
    const param = new HttpParams().set('discountID', JSON.stringify(discountID));

    return this.http.delete<void>(url, {params: param});
  }

  alterDiscount(discount: DiscountsVM): Observable<void> {
    const url = this.buildUrl('/update');
    const param = new HttpParams().set('discountString', this.discountToJSON(discount));

    return this.http.patch<void>(url, null, {params: param});
  }
}
