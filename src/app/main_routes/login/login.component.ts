import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  login(user: string, pass: string) {
    // this.fireAtuh.login(user, pass);
  }
}
