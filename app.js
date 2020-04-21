'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos de rutas
var project_routes = require('./routes/project');

//middlewares metodo que se ejecuta antes de ejecutar la accion de un controlador o peticion

app.use(bodyParser.urlencoded({ extends: false }));  //configuracion de bodyparser
app.use(bodyParser.json()); //convierte cualquier cosa a json


//Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas

app.use('/api', project_routes);
/*app.post('/test/:id', (req, res) => {
    console.log(req.query.nombre);
    console.log(req.query.web);
    console.log(req.params.id)
   
    res.status(200).send({
        message: "Hola mundo desde mi Api de NOde"
    });
});

app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Pagina de inicio</h1>"
    );
});
*/


//exportar


module.exports = app;