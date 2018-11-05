import {Component, OnInit} from '@angular/core';
import {DbService} from '../db.service';

@Component({
  selector: 'app-nueva-casa',
  templateUrl: './nueva-casa.component.html',
  styleUrls: ['./nueva-casa.component.css']
})
export class NuevaCasaComponent implements OnInit {
  info_casa = {};

  constructor(private db: DbService) {
  }

  ngOnInit() {
  }

  registrarCasa(nombre: string, dir: string, habi: number) {
    // se crea el objeto que contiene la información de la casa
    this.info_casa = {
      nombre: nombre,
      dir: dir,
      habi: habi
    };
    this.db.pushCasa(this.info_casa);
  }
}
