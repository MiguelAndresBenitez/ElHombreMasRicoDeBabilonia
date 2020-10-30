const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Usuario extends Model {}
Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    passwort:DataTypes.STRING,
}, {
    sequelize,
    modelName: "usuario",
});

module.exports = Usuario;