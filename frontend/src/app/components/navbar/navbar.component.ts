import { Component, OnInit } from '@angular/core';
import { DeclareFunctionStmt } from '@angular/compiler';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth} from '@angular/fire/auth';
// import { auth } from 'firebase/app';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }
  public app_name = 'Gusteka Drums';
  public isLogged = false;

  ngOnInit() {
    this.getCurrentUser();
  }

  // Funcion para validar si se Logueo correctamente
  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
      if ( auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('not user logged');
        this.isLogged = false;
      }
    });

  }


  onLogout() {
    this.afsAuth.auth.signOut();
  }

}
