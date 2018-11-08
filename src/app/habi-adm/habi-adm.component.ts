import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CurrentService} from '../current.service';
import {DbService} from '../services/db.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-habi-adm',
  templateUrl: './habi-adm.component.html',
  styleUrls: ['./habi-adm.component.css']
})
export class HabiAdmComponent implements OnInit, OnDestroy {
  habitacion_seleccionada: number;
  private _sRoomInfo: Subscription;
  info_room: any = {};
  isNew: boolean;
  room_values: any[] = [];
  private uid_casa: string;
  private _sRoomValues: Subscription;
  value_selected: any = {id: '', name: '', value: ''};

  _value_selected = {
    ref_no: '',
    address: '',
    value: {}
  };

  dias_vivos: any;
  saldo_a_favor: any;
  allow_push_value_selected = false;
  private default_val: any;
  id_selected: number;

  constructor(private db: DbService, public active_route: ActivatedRoute, private current: CurrentService) {
  }

  ngOnInit() {
    this._sRoomInfo = this.active_route.params.subscribe(params => {
      this.habitacion_seleccionada = +params['habt']; // (+) converts string 'id' to a number
      // console.log('habt');
      this.uid_casa = this.current.info_user_logueado.key_casa;
      console.log(this.uid_casa);
      // traer info de la habitación
      this.db.infoRoom(this.uid_casa, this.habitacion_seleccionada).subscribe(info_room => {
        console.log(info_room);
        if (info_room !== null) {
          console.log('se traae info del cuarto');
          this.isNew = false;
          this.info_room = info_room;

          this._sRoomValues = this.db.getRoomValues().subscribe(value => {
            this.room_values = value;
            this.value_selected = this.room_values.find(val => {
              return val.name.toLowerCase() === this.info_room.value_selected.name.toLowerCase();
            });
          });
        } else {
          // no existe información de ese cuarto
          console.log('no existe información de ese cuarto...');
          this.isNew = true;

          this._sRoomValues = this.db.getRoomValues().subscribe(value => {
            this.room_values = value;
            this.default_val = value[0];
          });
        }
      });

    });
  }

  ngOnDestroy() {
    this._sRoomInfo.unsubscribe();
    this._sRoomValues.unsubscribe();
  }

  startRoom(name: string, apellidos: string, tipo: string, doc: string) {
    console.log('se ingresa nuevo inquilino a habitación');

    const nInqui = {
      value_selected: this.default_val,
      name: name,
      last_name: apellidos,
      tipo: tipo,
      doc: doc,
      logs: []
    };
    this.db.subirInqui(this.uid_casa, this.habitacion_seleccionada, nInqui);
  }

  alSelect(r: any): boolean {
    return r.name === 'solo';
  }

  onChangeValue($event) {
    console.log($event);
    this.db.push_current_value(this.uid_casa, this.habitacion_seleccionada, $event);
    console.log('se actualiza el dato');
  }
}
