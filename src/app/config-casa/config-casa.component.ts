import {Component, OnDestroy, OnInit} from '@angular/core';
import {DbService} from '../services/db.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {CurrentService} from '../current.service';

@Component({
  selector: 'app-config-casa',
  templateUrl: './config-casa.component.html',
  styleUrls: ['./config-casa.component.css']
})
export class ConfigCasaComponent implements OnInit, OnDestroy {
  private info_casa: any = {};
  private _buscarAdm: Subscription;
  mostrarNewAdm: boolean;
  infoUser: any = {};

  constructor(private db: DbService, private active_route: ActivatedRoute, private current: CurrentService) {
  }

  ngOnInit() {
    this.info_casa = this.current.info_casa;
    console.log('se trae info casa');
    console.log(this.info_casa);
    this.buscarAdm();
  }

  crearAdministrador(name: string, last_name: string, pass: string) {
    const n_email = name.toLowerCase() + '.' + last_name.toLowerCase() + '@admin.inqui.com';
    const admObj: any = {name: name, last_name: last_name, email: n_email, cargo: 'adm', pass: pass};
    console.log('asldvnkldnv');
    this.db.registro_adm(admObj, this.info_casa.metadata.id, this.infoUser);
    this.mostrarNewAdm = false;
  }

  buscarAdm() {
    this._buscarAdm = this.db._sInfoAdmn(this.info_casa.metadata.id).subscribe(value => {
        console.log(value);
        if (value) {
          console.log('si existe admn');
          this.infoUser = value;
          this.mostrarNewAdm = false;
        } else {
          console.log('no existe administrado');
          this.mostrarNewAdm = true;
        }
      }
    );
  }

  getCorreoCasa() {
    this.info_casa.name.split(' ');
  }

  ngOnDestroy(): void {
    this._buscarAdm.unsubscribe();
  }

  eliminarAdm() {
    this.mostrarNewAdm = true;
  }
}

