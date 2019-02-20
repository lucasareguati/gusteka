import { Component, OnInit } from '@angular/core';
import {AngularFireAuth  } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {AuthService} from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  public email = '';
  public pass = '';

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.pass)
    .then((res) => {
        this.router.navigate(['/']);
      })
    .catch(err => console.log('Error: ', err.message));
  }

  onLoginFacebook() {
    this.authService.loginFacebookUser().then((res) => {
      this.router.navigate(['/']);
      console.log(res);
    }).catch(err => console.log('Error: ', err.message));
  }

  onLoginGoogle() {
    this.authService.loginGoogleUser().then((res) => {
      this.router.navigate(['/']); // Verificar
    }).catch(err => console.log('Error: ', err.message));
  }

  onLogoutUser() {
    this.authService.logoutUser();
  }

}
