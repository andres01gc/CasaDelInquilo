import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-habi-adm',
  templateUrl: './habi-adm.component.html',
  styleUrls: ['./habi-adm.component.css']
})
export class HabiAdmComponent implements OnInit, OnDestroy {
  habitacion_seleccionada: number;
  private sus_habt: Subscription;

  constructor(public active_route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sus_habt = this.active_route.params.subscribe(params => {
      this.habitacion_seleccionada = +params['habt']; // (+) converts string 'id' to a number
      console.log('habt');
    });
  }

  ngOnDestroy() {
    this.sus_habt.unsubscribe();
  }
}
