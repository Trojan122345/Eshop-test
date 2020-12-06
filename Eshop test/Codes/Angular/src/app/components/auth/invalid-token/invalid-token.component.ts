import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invalid-token',
  templateUrl: './invalid-token.component.html',
  styleUrls: ['./invalid-token.component.css']
})
export class InvalidTokenComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    setTimeout((router: Router) => {
      router.navigate(['/logout']);
    }, 3 * 1000, this.router);
  }

}
