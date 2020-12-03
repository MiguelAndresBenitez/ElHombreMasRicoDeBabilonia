const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const schema = new Schema({
    id: {type: Number},
    titulo: { type: String, required: true },
    monto: {type: Number, required:true},
    descripcion: {type: String}
},{
    timestamps:false
})


module.exports = model("comprobantes",schema);