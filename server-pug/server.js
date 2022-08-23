const express = require("express");
const morgan = require("morgan");

const app = express();
const routerProductos = require("./src/routes/productos.routes.js");

// /*-------------------Middleware-------------------------*/
app.use(express.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.use(express.static('./public'));

//Motor de plantillas
app.set('views', './views');
app.set('view engine', 'pug');

// /*-------------------Rutas-------------------------*/
app.use("/", routerProductos);

/* ---------------------- Servidor ----------------------*/
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error', err => console.log(`error en server ${err}`));
