import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../Services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private loginService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.logout();
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
