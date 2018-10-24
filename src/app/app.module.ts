import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './main_routes/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {MainDueComponent} from './main_routes/main-due/main-due.component';
import {MainAdmComponent} from './main_routes/main-adm/main-adm.component';
import locateEs from '@angular/common/locales/es-MX';
import {registerLocaleData} from '@angular/common';
import {CasaDueComponent} from './casa-due/casa-due.component';
import {ContaGeneralDueComponent} from './conta-general-due/conta-general-due.component';
import {HabiAdmComponent} from './habi-adm/habi-adm.component';
import {ContaAdmComponent} from './conta-adm/conta-adm.component';
import {HomeDueComponent} from './home-due/home-due.component';
import {HomeAdmComponent} from './home-adm/home-adm.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {
    path: 'adm', component: MainAdmComponent, children: [
      {path: '', component: HomeAdmComponent},
      {path: 'habitacion', component: HabiAdmComponent},
      {path: 'contabilidad_general', component: ContaAdmComponent}
    ]
  },
  {
    path: 'due', component: MainDueComponent, children: [
      {path: '', component: HomeDueComponent},
      {
        path: 'casa', component: CasaDueComponent, children: []
      },
      {path: 'contabilidad_general', component: ContaGeneralDueComponent},
    ]
  }];

// {path: '', component: UserServiciosComponent},
// {path: 'contabilidad', component: UserServiciosComponent},
// {path: 'ajustes', component: UserServiciosComponent},


const config = {
  apiKey: 'AIzaSyCVsmyQhQDfKlO1HREEshd0V_IiVP1CGmE',
  authDomain: 'casadelinquilino.firebaseapp.com',
  databaseURL: 'https://casadelinquilino.firebaseio.com',
  projectId: 'casadelinquilino',
  storageBucket: 'casadelinquilino.appspot.com',
  messagingSenderId: '387467461917'
};

registerLocaleData(locateEs);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MainDueComponent,
    MainAdmComponent,
    CasaDueComponent,
    ContaGeneralDueComponent,
    HabiAdmComponent,
    ContaAdmComponent,
    HomeDueComponent,
    HomeAdmComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes, {enableTracing: true}), AngularFireModule.initializeApp(config), AngularFirestoreModule, AngularFireAuthModule
  ],
  providers: [{provide: 'es-MX', useValue: 'es'}],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
