var express = require('express');
var app = express();
var routes = require ('./rutas/routes.js') (app); //RUTA DEL ARCHIVO DE EL PERFIL 

app.use(express.static('./public')); //RUTA PUBLICA PARA INCORPORAR LAS IMAGENES Y FRAMEWORK DE BOOTSTRAP

var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1" ; 
var port =  process.env.OPENSHIFT_NODEJS_PORT || 3000; 
app.listen(port,ip) ; 

