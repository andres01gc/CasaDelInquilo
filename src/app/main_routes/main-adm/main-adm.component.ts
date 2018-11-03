import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-adm',
  templateUrl: './main-adm.component.html',
  styleUrls: ['./main-adm.component.css']
})
export class MainAdmComponent implements OnInit {
  cantidadHabitaciones = 34;

  constructor(private router: Router) {
  }

  ngOnInit() {
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

  counter(i: number) {
    return new Array(i);
  }

}
