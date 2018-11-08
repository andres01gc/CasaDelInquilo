import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DbService} from '../../services/db.service';
import {Observable} from 'rxjs';
import {SnapshotAction} from '@angular/fire/database';

@Component({
  selector: 'app-home-due',
  templateUrl: './main-due.component.html',
  styleUrls: ['./main-due.component.css']
})
export class MainDueComponent implements OnInit, OnDestroy {
  info_user: any;
  private _casas: Observable<any[]>;
  casas: any[];
  casaSelected: any;

  constructor(private db: DbService, private router: Router) {
    this._casas = this.db.getCasasUsuarioOb();
    this.info_user = db.infoUserLogueado;
  }

  ngOnInit() {
    this._casas.subscribe(cs => {
      this.casas = cs;
      console.log(this.casas);
    });
  }

  AbrirCasa(casa: any) {
    this.casaSelected = casa;
    this.router.navigate(['due/casa', casa.id]);
  }

  cerrarSesion() {
    this.router.navigate(['login']);
  }

  ngOnDestroy(): void {
  }
}
