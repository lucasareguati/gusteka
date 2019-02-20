import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../../models/usuario';
import { HttpClient } from '@angular/common/http';


declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsuarioService]
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  registrarUsuario(form: NgForm) { 
    this.usuarioService.postUsuario(form.value)
    .subscribe( res => {
      form.resetForm();
      M.toast({html: 'Registrado correctamente'});
    });
  }

}
