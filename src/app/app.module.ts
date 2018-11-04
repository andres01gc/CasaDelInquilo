import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './main_routes/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MainDueComponent} from './main_routes/main-due/main-due.component';
import {MainAdmComponent} from './main_routes/main-adm/main-adm.component';
import {CasaDueComponent} from './casa-due/casa-due.component';
import {ContaGeneralDueComponent} from './conta-general-due/conta-general-due.component';
import {HabiAdmComponent} from './habi-adm/habi-adm.component';
import {ContaAdmComponent} from './conta-adm/conta-adm.component';
import {HomeDueComponent} from './home-due/home-due.component';
import {HomeAdmComponent} from './home-adm/home-adm.component';
import {HomeCasaComponent} from './home-casa/home-casa.component';
import {ConfigCasaComponent} from './config-casa/config-casa.component';
import {RegistroComponent} from './registro/registro.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {registerLocaleData} from '@angular/common';
import mx from '@angular/common/locales/es-MX';
import {NuevaCasaComponent} from './nueva-casa/nueva-casa.component';

registerLocaleData(mx, 'es-MX');

const appRoutes: Routes = [
  {path: 'reg', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'adm', component: MainAdmComponent, children: [
      {path: 'home', component: HomeAdmComponent},
      {path: 'habitacion/:habt', component: HabiAdmComponent},
      {path: 'contabilidad_general', component: ContaAdmComponent}
    ]
  }, {
    path: 'due', component: MainDueComponent, children: [
      {path: 'home', component: HomeDueComponent},
      {path: 'nueva_casa', component: NuevaCasaComponent},
      {
        path: 'casa/:id_casa', component: CasaDueComponent, children: [
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          {path: 'home', component: HomeCasaComponent},
          {path: 'config', component: ConfigCasaComponent}
        ]
      },
      {path: 'contabilidad_general', component: ContaGeneralDueComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ]
  }]
;

// {
//   path: '', component: CasaDueComponent, children: [

// },

const config = {
  apiKey: 'AIzaSyCVsmyQhQDfKlO1HREEshd0V_IiVP1CGmE',
  authDomain: 'casadelinquilino.firebaseapp.com',
  databaseURL: 'https://casadelinquilino.firebaseio.com',
  projectId: 'casadelinquilino',
  storageBucket: 'casadelinquilino.appspot.com',
  messagingSenderId: '387467461917'
};

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
    HomeCasaComponent,
    ConfigCasaComponent,
    RegistroComponent,
    NuevaCasaComponent,
  ],
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule
  ],
  providers: [],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
