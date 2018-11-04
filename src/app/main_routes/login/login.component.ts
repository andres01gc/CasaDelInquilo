import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private db: DbService, public router: Router) {
  }

  ngOnInit() {
  }

  login(user: string, pass: string) {
    console.log('intentando loguear');
    this.db.login(user, pass, infoUser => {
      if (infoUser !== null) {
        // login exitoso!
        console.log(infoUser);
        switch (infoUser.cargo) {
          case 'due':
            this.router.navigate(['due']);
            break;

          case 'adm':
            this.router.navigate(['adm']);
            break;
        }
      }
    });
  }
}
