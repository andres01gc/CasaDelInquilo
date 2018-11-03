import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  user: Observable<firebase.User>;
  firebaseAuth: AngularFireAuth;

  constructor(fireauth: AngularFireAuth, private router: Router) {
    this.user = fireauth.authState;
    this.firebaseAuth = fireauth;
  }


  signup(user: string, password: string) {
    // this.firebaseAuth
    //   .auth
    //   .createUserWithEmailAndPassword(user, password)
    //   .then(value => {
    //     console.log('Success!', value);
    //   })
    //   .catch(err => {
    //     console.log('Something went wrong:', err.message);
    //   });
  }

  login(email: string, pass: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(auth => {
          console.log('usuario encontrado');
          // console.log(email.split('@')[1].split('.')[0]);
          switch (email.split('@')[1].split('.')[0]) {
            case 'admin':
              this.iniciarAdmin();
              break;

            case 'due':
              this.iniciarDue();
              break;
          }
        }
      )
      .catch(err => {
        console.log(err);
        if (err.code.indexOf('auth/user-not-found') >= 0) {
          // this.msg = 'Parece que ese usuario no existe... :/';
        }
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
}
