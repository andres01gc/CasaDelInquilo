import {Component, OnInit} from '@angular/core';
import {FireAuthService} from '../../services/fire-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public fireAtuh: FireAuthService, public router: Router) {
  }

  ngOnInit() {
  }

  login(user: string, pass: string) {
    this.fireAtuh.login(user, pass);
  }
}
