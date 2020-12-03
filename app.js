require('./db');

const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const handlebars = require('handlebars');
const session = require('express-session');
const path = require('path');


const app = express();


app.set('port', process.env.PORT || 44000);
app.set('vista', path.join(__dirname, 'vista'));
app.engine('.hbs', hbs({
    defaultLayout: 'index',
    layoutsDir: path.join(app.get('vista'), 'layouts'),
    partialsDir: path.join(app.get('vista'), 'partials'),
    extname: '.hbs', handlebars: handlebars 
}));
app.set('view engine', 'hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true,
    useUnifiedTopology: true 
}));
app.use(express.json());

//Variables Glovales
app.use((req, res, next) => {
    next();
});

//Rutas
app.use("/",require('./controlador/index.js'));
app.use("usuarios",require('./controlador/usuario.js'));
app.use('/comprobantes',require('./controlador/comprobantes.js'));

//Publico
//app.use(express.static(path.join(__dirname, 'publico')));

//Inicio de servidor
app.listen(app.get('port'), () => {
 console.log('servidor en el puerto', app.get('port'));   
});