const express = require('express');
const rutas = express.Router();
const usuarios = require("../modelo/usuarios");

rutas.get('/login', (req, res) => {
   res.render('../vista/usuarios/login.hbs');
});

rutas.get('/registrarte', (req, res) => {
    res.render('../vista/usuario/registrarte.hbs');
});

module.exports = rutas; 