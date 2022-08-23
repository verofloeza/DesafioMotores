const express = require("express");
const morgan = require("morgan");
const exphbs = require('express-handlebars');
const path = require("path");

const app = express();
const routerProductos = require("./src/routes/productos.routes.js");

// /*-------------------Middleware-------------------------*/
app.use(express.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.use(express.static('./public'));

//Motor de plantillas
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// /*-------------------Rutas-------------------------*/
app.use("/", routerProductos);

/* ---------------------- Servidor ----------------------*/
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error', err => console.log(`error en server ${err}`));