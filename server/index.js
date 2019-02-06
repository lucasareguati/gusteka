const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {sequelize} = require('./database');

var app = express(); 

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors({origin: 'http://localhost:4200'}));

//Settings
app.set('port', process.env.PORT || 3000 );
app.set(express.json());

//Middlewares
app.use(morgan('dev'));



//Routes
app.use('/platillo', require('./routes/platillo.routes'));
app.use('/usuario', require('./routes/cliente.routes'));

app.listen(app.get('port') , () => {
    console.log('Server on port ' + app.get('port'));
});

