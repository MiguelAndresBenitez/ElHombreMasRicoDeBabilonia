const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');

//Inicializacion
const app = express();

//set 
app.set('port', process.env.PORT || 4000);
app.set('vista', path.join(__dirname, 'vista'));
app.engine('.hbs', hbs({
    defaultLayout: 'index',
    layoutsDir: path.join(app.get('vista'), 'layouts'),
    partialsDir: path.join(app.get('vista'), 'partials'),
    extname: '.hbs',
    helpers: require('./controlador/handlebars.js')
}));
app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extends: false}));
app.use(express.json());

//Variables Glovales
app.use((req, res, next) => {
    next();
});

//Rutas
app.use(require('./controlador/index.js'));
app.use(require('./controlador/autenticar.js'));
app.use('/comprobantes',require('./controlador/comprobantes.js'));

//Publico
//app.use(express.static(path.join(__dirname, 'publico')));

//Inicio de servidor
app.listen(app.get('port'), () => {
 console.log('servidor en el puerto', app.get('port'));   
});