import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DbService} from '../../services/db.service';
import {CurrentService} from '../../current.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home-adm',
  templateUrl: './main-adm.component.html',
  styleUrls: ['./main-adm.component.css']
})
export class MainAdmComponent implements OnInit, OnDestroy {
  rooms = 0;
  private _infoCasa: Subscription;
  private casa: any;

  constructor(private router: Router, private db: DbService, private current: CurrentService) {

  }

  ngOnInit() {
    console.log(this.current.info_user_logueado);
    this._infoCasa = this.db._sInfoCasa(this.current.info_user_logueado.key_casa).subscribe(result => {
      this.current.info_casa = result;
      this.casa = result;
      console.log(result);
      this.rooms = +this.casa.rooms + 1;
    });


  }

  abrirHabitacion(habt: number) {
    console.log(habt);
    this.router.navigate(['./adm/habitacion', habt]);
  }

  abrirContaGene() {
    this.router.navigate(['./adm/contabilidad_general']);
  }

  cerrarCuenta() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this._infoCasa.unsubscribe();
  }

  counter(i: number) {
    return new Array(i);
  }
}
