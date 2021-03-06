const Cliente = require('../models/cliente');
const { sequelize, Sequelize} = require('../database');

const clienteCtrl = {};

clienteCtrl.getUsuarios = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
}

clienteCtrl.getUsuario = async (req, res) => {
    const usuario = await Cliente.findAll({
        where: {
            email: req.params.email
        }
    });
    res.json(usuario);
}

clienteCtrl.createUsuario = async(req, res) => {
    await Cliente.create(req.body);
    res.send({
        status: "Creado correctamente"
    });
}

clienteCtrl.editUsuario = async(req, res) => {
    const id = req.params.id;

    const usuarioActualizado = {
        nombre_usuario: req.body.nombre_usuario,
        nombre: req.body.nombre,
        codigopostal: req.body.codigopostal,
        email: req.body.email,
        tel: req.body.tel
    }

    await Cliente.update(usuarioActualizado, {
        where: {
            id_usuario: id
        }
    });
    res.json(usuarioActualizado);
}

module.exports = clienteCtrl;