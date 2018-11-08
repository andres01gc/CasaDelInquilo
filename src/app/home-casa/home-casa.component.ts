import {Component, OnInit} from '@angular/core';
import * as Chart from 'chart.js';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home-casa',
  templateUrl: './home-casa.component.html',
  styleUrls: ['./home-casa.component.css']
})
export class HomeCasaComponent implements OnInit {
  canvas: any;
  ctx: any;
  chart = [];

  constructor() {

  }

  ngOnInit() {
    // this.dailyForecast()
    //   .subscribe(res => {
    //     console.log(res);
    //
    //     const temp_max = res['list'].map(res => res.main.temp_max);
    //     const temp_min = res['list'].map(res => res.main.temp_min);
    //     const alldates = res['list'].map(res => res.dt);
    //
    //     let weatherDates = [];
    //     alldates.forEach((res) => {
    //       let jsdate = new Date(res * 1000);
    //       weatherDates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}));
    //     });
    //
    //     this.chart = new Chart('canvas', {
    //       type: 'line',
    //       data: {
    //         labels: weatherDates,
    //         datasets: [
    //           {
    //             data: temp_max,
    //             borderColor: '#3cba9f',
    //             fill: false
    //           },
    //           {
    //             data: temp_min,
    //             borderColor: '#ffcc00',
    //             fill: false
    //           },
    //         ]
    //       },
    //       options: {
    //         legend: {
    //           display: false
    //         },
    //         scales: {
    //           xAxes: [{
    //             display: true
    //           }],
    //           yAxes: [{
    //             display: true
    //           }]
    //         }
    //       }
    //     });
    //   });
  }

}
