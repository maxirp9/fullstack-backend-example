var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: String,
    apellido: String,
    salario: String    
}, {
    timestamps: true
});


module.exports = mongoose.model('Empleado', EmpleadoSchema);