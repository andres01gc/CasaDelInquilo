import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {DbService} from '../db.service';


@Component({
  selector: 'app-casa-due',
  templateUrl: './casa-due.component.html',
  styleUrls: ['./casa-due.component.css']
})
export class CasaDueComponent implements OnInit, OnDestroy {
  private sus_habi: Subscription;
  private id_casa: string;
  private susInfoCasa: Subscription;
  infoCasa: any = [];

  constructor(private active_route: ActivatedRoute, private db: DbService) {
  }

  ngOnInit() {
    this.sus_habi = this.active_route.params.subscribe(params => {
      this.id_casa = params['id_casa'];
      this.susInfoCasa = this.db.susbInfoCasa(this.id_casa).subscribe(value => {
        this.infoCasa = value;
        console.log(this.infoCasa);
      });
    });
  }

  ngOnDestroy() {
    this.susInfoCasa.unsubscribe();
    this.sus_habi.unsubscribe();
  }
}
