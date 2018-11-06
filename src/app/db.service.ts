import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {s} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  user: Observable<firebase.User>;
  firebaseAuth: AngularFireAuth;
  infoUserLogueado: any;
  private tipoUserLogged: any | string | string;
  private _user: firebase.User;

  constructor(public db: AngularFireDatabase, fireauth: AngularFireAuth, private router: Router) {
    this.user = fireauth.authState;
    this.firebaseAuth = fireauth;
  }

  login(email: string, pass: string, result: (ho: any) => any) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(auth => {
          this._user = auth.user;
          this.traerDatosUsuario(auth.user.uid, val => {
            result(val);
          });
        }
      )
      .catch(err => {
        console.log(err);
        result(null);
      });
  }

  private iniciarDue() {
    console.log('se loguea el dueño');
    this.router.navigate(['/home/']);
  }

  private iniciarAdmin() {
    console.log('se loguea el administrador');
    this.router.navigate(['/home/']);
  }


  registro_due(usr: any, pass: string) {
    console.log('intentanto registrar');
    console.log(usr);
    this.firebaseAuth.auth.createUserWithEmailAndPassword(usr.email, pass)
      .then(value => {
        console.log('Registro exitoso');
        console.log(value);
        this.pushAllNewUserInfo(usr, value.user.uid);
        this.router.navigate(['/login']);
      })
      .catch(err => {
        if (err) {
        } else {
          console.log('Something went wrong:');
        }
      });
  }

  private pushAllNewUserInfo(user: any, uid: string) {
    const itemRef = this.db.object('dues/' + uid);
    itemRef.set({
      email: user.email,
      name: user.name,
      last_name: user.last_name,
      sex: 'asd',
      cargo: user.cargo
    });
    this.router.navigate(['/login']);
  }

  traerDatosUsuario(uid: string, p: (val: any) => void) {

    this.db.object('dues/' + uid).valueChanges().subscribe(value => {
      this.infoUserLogueado = value;
      console.log('se trae la info del usuario');
      console.log(this.infoUserLogueado);
      this.tipoUserLogged = this.infoUserLogueado.cargo;
      p(this.infoUserLogueado);
    });
  }

  pushCasa(basic_info_casa: {}) {
    // comprobar usuario logueado
    const f_casa = {};
    f_casa['info'] = f_casa;
    f_casa['metadata'] = {
      reg_date: Date.now(),
      due_id: this._user.uid,
    };

    const k = this.db.list('casas/').push(basic_info_casa).key;
    basic_info_casa['id'] = k;
    this.db.list('dues/' + this._user.uid + '/casas').push(basic_info_casa);
    console.log('se ha registrado una nueva casa');
  }

  getCasasUsuarioOb(): Observable<any[]> {
    // this.item$ = this.db.object<Item>('/item').valueChanges().subscribe(item => console.log(item));
    console.log(this._user.uid);
    return this.db.list('dues/' + this._user.uid + '/casas').valueChanges();
  }

  susbInfoCasa(id_casa: string): Observable<any | null> {
    return this.db.object('casas/' + id_casa).valueChanges();
  }
}
