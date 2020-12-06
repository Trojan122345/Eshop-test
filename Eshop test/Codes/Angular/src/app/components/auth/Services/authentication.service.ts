import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router,
              private httpClient: HttpClient
  ) {
  }

  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/api/login', {username, password}).pipe(
      map(
        userData => {
          const tokenStr = 'Bearer ' + userData.token;
          const isAdmin = userData.admin;

          sessionStorage.setItem('username', username);
          sessionStorage.setItem('token', tokenStr);
          sessionStorage.setItem('isAdmin', isAdmin);
          return userData;
        }
      )
    );
  }

  changeAdminMode() {
    if (this.isUserAdmin()) {
      let isAdminModeS = sessionStorage.getItem('isAdminMode');
      if (isAdminModeS == null || isAdminModeS === 'false') {
        isAdminModeS = 'true';
      } else {
        isAdminModeS = 'false';
      }
      this.router.navigate(['']);
      sessionStorage.setItem('isAdminMode', isAdminModeS);
    }
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  isUserAdmin(): boolean {
    const isAdminS = sessionStorage.getItem('isAdmin');
    return this.isUserLoggedIn() && (isAdminS === 'true');
  }

  isAdminMode(): boolean {
    const isAdminModeS = sessionStorage.getItem('isAdminMode');
    return this.isUserAdmin() && (isAdminModeS === 'true');
  }

  logout() {
    sessionStorage.removeItem('cart');
    sessionStorage.removeItem('cartID');
    sessionStorage.removeItem('username');
    sessionStorage.clear();
  }

  private validateToken(): Observable<boolean> {
    if (this.isUserLoggedIn()) {
      const url = 'http://localhost:8080/api/isValidLogin';
      const param = new HttpParams().set('token', sessionStorage.getItem('token'));

      return this.httpClient.get<boolean>(url, {params: param});
    }
  }

  public checkToken() {
    this.validateToken().subscribe(
      res => {
        if (!res) {
          this.router.navigate(['/loginExpired']);
        }
      }
    );
  }

  getUsername(): string {
    return sessionStorage.getItem('username');
  }
}
