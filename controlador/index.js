const express = require('express');
const rutas = express.Router();

//Ruta inicial
rutas.get('/', (req, res) => {
    res.render('../vista/index/index.hbs');
});

module.exports = rutas;