const Comprobantes = require('./tablas/Comprobantes');
const Usuario = require('./tablas/Usuario');

// Uno a muchos
// Usuario va a tener muchos comprovantes
// Se añade una clave usuarioId a la tabla comprovantes
Usuario.hasMany(Comprobantes, { as: "nComprovantes", foreignKey: "usuarioID" });

// Se añade una clave userId a la tabla posts
Comprobantes.belongsTo(Usuario, { as: "usuario" });