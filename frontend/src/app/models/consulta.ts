
export class Consulta {
    constructor(id_consulta= null,
        id_usuario= null,
        id_platillo= null,
        consulta = '',
        fecha = '',
        respuesta = '') {
            this.id_consulta = id_consulta;
            this.id_platillo = id_platillo;
            this.id_usuario = id_usuario;
            this.consulta = consulta;
            this.fecha = fecha;
            this.respuesta = respuesta;
        }
    id_consulta: number;
    id_platillo: number;
    id_usuario: number;
    consulta: string;
    fecha: string;
    respuesta: string;

}
