import { Serializer } from '@angular/compiler';
export class Usuario {

    constructor(id_usuario= null,
        nombre_usuario= '',
        nombre = '',
        codigopostal= '',
        dni= null,
        contraseña= '',
        email= '',
        tel= null) {
            this.id_usuario = id_usuario;
            this.nombre_usuario = nombre_usuario;
            this.nombre = nombre;
            this.codigopostal = codigopostal;
            this.contraseña = contraseña;
            this.dni = dni;
            this.email = email;
            this.tel = tel;
    }

    id_usuario: number;
    nombre_usuario: string;
    nombre: string;
    codigopostal: string;
    contraseña: string;
    dni: number;
    email: string;
    tel: number;

}
