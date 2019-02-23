import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  usuario: Usuario;


  constructor(private usuarioService: UsuarioService) {
  }


  ngOnInit() {
    this.usuario = this.usuarioService.usuarioLogueado;
  }

}
