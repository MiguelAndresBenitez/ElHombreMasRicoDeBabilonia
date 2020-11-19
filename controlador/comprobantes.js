const express = require('express');
const rutas = express.Router();
const pool = require('../db');

rutas.get('/add', (req, res) => {
    res.render('../vista/comprobantes/add.hbs');
});

rutas.post('/add', async (req, res) => {
    const { titulo, monto, descripcion } = req.body;
    const newComprobante = {
        titulo,
        monto,
        descripcion
    };
    //console.log(newComprobante);
    await pool.query('INSERT INTO comprobantes set ?', [newComprobante]);
    res.send('resivido');
});

/*rutas.get('/', async (req, res) => {
    const comprobantes = await pool.query('SELECT * FROM comprobantes');
    res.render('../vista/comprobantes/lista.hbs', { comprobantes });
});*/

module.exports = rutas;