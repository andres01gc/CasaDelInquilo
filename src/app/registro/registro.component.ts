import {Component, OnInit} from '@angular/core';
import {DbService} from '../services/db.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public db: DbService) {
  }

  ngOnInit() {
  }

  registrarUser(mail: string, pass: string, nombre: string, apellidos: string) {
    const usr = {
      name: nombre,
      email: mail,
      last_name: apellidos,
      cargo: 'due'
    };
    this.db.registro_due(usr, pass);
  }
}
