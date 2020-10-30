
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Comprovantes extends Model {}
Comprovantes.init({
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
    modelName: "comprovantes"
});

module.exports = Comprovantes;