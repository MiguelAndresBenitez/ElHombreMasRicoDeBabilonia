const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const schema = new Schema({
    id: {type: Number},
    nombre: { type: String, required: true },
    password: {type: String, required:true},
},{
    timestamps:false
})

module.exports = model("usuarios",schema);