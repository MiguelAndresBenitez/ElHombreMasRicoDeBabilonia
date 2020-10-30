const express = require('express');
const app = express();
const sequelize = require('./modelo/db');
require('./modelo/asociacion');

// Setting
const PORT = process.env.PORT || 3000;

// Middleware

// Rutas
//app.use('/api/posts', require('controlador/rutas/usuario'));
//app.use('/api/users', require('controlador/rutas/comprovantes'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    sequelize.sync({ force: false }).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});