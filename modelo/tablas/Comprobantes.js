
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Comprobantes extends Model {}
Comprobantes.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: DataTypes.DATE,
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    monto: DataTypes.FLOAT


}, {
    sequelize,
    modelName: "comprobantes"
});

module.exports = Comprobantes;