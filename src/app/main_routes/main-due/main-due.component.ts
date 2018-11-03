import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-due',
  templateUrl: './main-due.component.html',
  styleUrls: ['./main-due.component.css']
})
export class MainDueComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  AbrirCasa() {
    this.router.navigate(['./due/caasa']);
  }

  abrirContabilidadGeneral() {
    this.router.navigate(['./due/contabilidad_general']);
  }

  cerrarSesion() {
    this.router.navigate(['login']);
  }
}
