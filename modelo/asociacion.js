const Comprovantes = require('./tablas/Comprovantes');
const Usuario = require('./tablas/Usuario');

// Uno a muchos
// Usuario va a tener muchos comprovantes
// Se añade una clave usuarioId a la tabla comprovantes
Usuario.hasMany(Comprovantes, { as: "nComprovantes", foreignKey: "usuarioID" });

// Se añade una clave userId a la tabla posts
Comprovantes.belongsTo(Usuario, { as: "usuario" });