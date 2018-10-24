import {Component, HostListener, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu_state = true;
  today = Date.now();
  fixedTimezone = this.today;
  todayFormated = '';

  constructor() {

  }

  ngOnInit() {
    this.comprobarMenu();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.comprobarMenu();
  }

  comprobarMenu() {  // el menú siempre estará abierto en modo escritorio
    if (window.innerWidth > 640) {
      this.menu_state = true;
    } else {
      this.menu_state = false;
    }
  }
}
