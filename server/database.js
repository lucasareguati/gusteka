var Sequelize = require('sequelize');

//Conexión de sequelize con Postgres

const sequelize = new Sequelize('postgres://usuariopostgres:contraseña@localhost:5432/nombreBBDD

//Autenticacion 
sequelize.authenticate().then(()=>{
    console.log('Conexion creada con exito');   
}).catch(err => {
    console.error('error en conexion con db: ', err);
});

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;
