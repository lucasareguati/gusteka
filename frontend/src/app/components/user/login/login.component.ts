import { Component, OnInit } from '@angular/core';
import {AngularFireAuth  } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {AuthService} from '../../../services/auth.service';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';


declare var M:  any; // Variable del toast

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private usuarioService: UsuarioService, public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  public email = '';
  public pass = '';

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.pass).then((res ) => { // autenticacion con firebase
      this.usuarioService.getUsuario('/' + this.email).subscribe( res => { // consulta a la BBDD
        console.log(res[0]); // En la posicion 0 de la respuesta se encuentra el objeto
        this.usuarioService.usuarioLogueado = res[0] as Usuario;
        this.router.navigate(['/']); // navega a la ruta /
        console.log(this.usuarioService.usuarioLogueado);
      });

    }).catch(err => {
      console.log('Ha ocurrido un error: ', err.message);
      M.toast({html: err.message});
    });
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
