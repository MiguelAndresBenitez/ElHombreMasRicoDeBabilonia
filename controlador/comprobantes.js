const express = require('express');
const rutas = express.Router();
const Comprobantes = require("../modelo/comprobantes");

//Agregar comprobante
rutas.get('/add', (req, res) => {
    res.render('../vista/comprobantes/add.hbs');
});

rutas.post('/add', async(req, res) => {
    const { titulo, monto, descripcion} = req.body;
    const errors = [];
     
    if(!titulo) {
        errors.push({text: 'por favor ingrese un titulo'});
    }
    if(!monto) {
        errors.push({text: 'por favor ingrese un monto'});
    }
    if(errors.length > 0) {
        res.render('../vista/comprobantes/add.hbs', {
            errors,
            titulo,
            monto,
            descripcion
        });
    }
    const comprobante = new Comprobantes(({titulo,monto,descripcion}));
    await comprobante.save()
        .then((response)=>{
            if(response){
                return res.redirect("/comprobantes/");
            }
        })
        .catch((err)=>{
            return res.render('../vista/comprobantes/lista.hbs',{
                responses:`comprobante no creado ${err}`
            });
        })
});

//Lista
rutas.get('/', async(req, res) => {
    const comprobantes = await Comprobantes.find();
    return res.render('../vista/comprobantes/lista.hbs',{ comprobantes });
});

//Editar
rutas.get("/editar/:id",async (req, res) => {
        let obtenido_id = req.params.id;
        const comprobante = await Comprobantes.findById(obtenido_id);
        return res.render('../vista/comprobantes/editar.hbs',{
            id:obtenido_id,
            monto       :comprobante.monto,
            titulo      :comprobante.titulo,
            descripcion :comprobante.descripcion
        });
});

rutas.post("/actualizar/",async (req, res) => {
        const {id,titulo, monto, descripcion} = req.body;
        let newData = {
            "titulo":titulo,
            "monto":monto,
            "descripcion":descripcion
        };
        await Comprobantes.findByIdAndUpdate(id,newData)
            .then(()=>{
                return res.redirect("/comprobantes/");
            })
            .catch((err)=>{
                return res.send(err);
            });
});

//Eliminar
rutas.post('/eliminar/:id', async (req, res) => {
    const {id} = req.params;
    console.log(id)
    await Comprobantes.findByIdAndDelete(id)
        .then(()=>{
            return res.redirect("/comprobantes/");
        })
        .catch((err)=>{
            return res.send(`error ${err}`)
        })
  });

module.exports = rutas;