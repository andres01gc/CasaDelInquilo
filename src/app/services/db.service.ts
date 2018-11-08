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
    let type = '';
    if (email.includes('admin')) {
      type = 'adms';
      console.log('se intenta loguear un adm');
    } else {
      type = 'dues';
      console.log('se intenta loguear un due');
    }
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(auth => {
          this._user = auth.user;
          console.log('existe usuario :D');
          this.traerDatosUsuario(type, auth.user.uid, val => {
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

  registro_adm(usr: any, id_casa: string, info_current_admin: any) {
    console.log('intentanto registrar adm');
    // por ahora guardaré el pass, pues no sé aún como borrarlo desde otra cuenta y me imagino no se puede.
    console.log(usr);

    if (info_current_admin.pass) {
      console.log('se encontró anterior');
      // existe el administrador, así que primero se eliminará
      this.firebaseAuth.auth.signInWithEmailAndPassword(info_current_admin.email, info_current_admin.pass)
        .then(auth => {
          auth.user.updatePassword(usr.pass);
          auth.user.updateEmail(usr.email).then(value => {
            console.log('se intenta cambiar el email');
          }).catch(reason => console.log(reason));
          this.pushNewAdmInfoUser(usr, auth.user.uid, id_casa);
          console.log('se remplaza los datos por el del nuevo administrado');
        }).catch(err => {
        // este pedira que se logue de nuevo, pero ps, este es el admin.
        console.error(err);
      });
    } else {
      console.log('no se encontró anterior adm');
      this.firebaseAuth.auth.createUserWithEmailAndPassword(usr.email, usr.pass)
        .then(value => {
          console.log('Registro exitoso');
          this.pushNewAdmInfoUser(usr, value.user.uid, id_casa);
        })
        .catch(err => {
          if (err) {
            console.log(err);
          } else {
            console.log('Something went wrong:');
          }
        });
    }
  }

  private comprobarAdmin() {


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

  private pushNewAdmInfoUser(admObj: any, uid_adm: string, uid_casa: string) {
    this.db.object('casas/' + uid_casa + '/current_adm').set(admObj);
    admObj['uid_adm'] = uid_adm;
    admObj['key_casa'] = uid_casa;
    this.db.object('adms/' + uid_adm).set(admObj);
    console.log('se registra un nuevo adm');
  }

  traerDatosUsuario(type: string, uid: string, p: (val: any) => void) {
    console.log(type + '/' + uid);
    this.db.object(type + '/' + uid).valueChanges().subscribe(value => {
      this.infoUserLogueado = value;
      console.log('se trae la info del usuario');
      console.log(this.infoUserLogueado);
      this.tipoUserLogged = this.infoUserLogueado.cargo;
      p(this.infoUserLogueado);
    });
  }

  pushCasa(basic_info_casa: any) {
    // comprobar usuario logueado

    const f_casa = basic_info_casa;
    f_casa['metadata'] = {
      reg_date: Date.now(),
      due_id: this._user.uid,
    };
    const k = this.db.list('casas/').push(f_casa).key;
    f_casa['metadata']['id'] = k;
    this.db.list('dues/' + this._user.uid + '/casas').push(basic_info_casa);
    console.log('se ha registrado una nueva casa');
  }

  _sCasasDue(): Observable<any[]> {
    // this.item$ = this.db.object<Item>('/item').valueChanges().subscribe(item => console.log(item));
    console.log(this._user.uid);
    return this.db.list('dues/' + this._user.uid + '/casas').valueChanges();
  }

  _sInfoAdmn(id_casa: string): Observable<any | null> {
    return this.db.object('casas/' + id_casa + '/current_adm').valueChanges();
  }

  _sInfoCasa(uid_casa: any): Observable<any | null> {
    return this.db.object('casas/' + uid_casa).valueChanges();
  }

  infoRoom(uid_casa: any, habitacion_seleccionada: number): Observable<any | null> {
    console.log('casas/' + uid_casa + 'rooms_data/' + habitacion_seleccionada);

    return this.db.object('casas/' + uid_casa + '/rooms_data/' + habitacion_seleccionada).valueChanges();
  }

  subirInqui(id_casa: string, habitacion_seleccionada: number, infoRoom: any) {
    console.log('se sube info del inquilino');
    this.db.object('casas/' + id_casa + '/rooms_data/' + habitacion_seleccionada).update(infoRoom);
  }

  getRoomValues(): Observable<any | null> {
    return this.db.list('main_data/values/basic_room/').valueChanges();
  }

  pushRooms(v: any[]) {
    this.db.object('main_data/values/basic_room/').set(v);
  }

  push_current_value(uid_casa: string, habitacion_seleccionada: number, value: any) {
    this.db.object('casas/' + uid_casa + '/rooms_data/' + habitacion_seleccionada + '/value_selected').set(value);
  }
}
