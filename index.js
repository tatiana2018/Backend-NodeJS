'use script'

var mongoose = require('mongoose');
var app = require('./app');
var port = 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Portafolio')
    .then(() => {
        console.log("Conexion a la base de datos establecida con exito")

        //creacion del servidor

        app.listen(port, () => {
            console.log("servidor corriendo correctamente en la url: localhost"+ ":" +port);
        });
    })
    .catch(err => console.log(err + "soy el error"));