import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './main_routes/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './main_routes/home/home.component';


const appRoutes: Routes = [{path: 'login', component: LoginComponent}, {path: 'home', component: HomeComponent}];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
