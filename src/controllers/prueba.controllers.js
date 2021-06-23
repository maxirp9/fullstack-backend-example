const PruebaCtrl={}
const Empleado=require('../models/prueba.model')


PruebaCtrl.obtener=(req, res) => {
    res.send('Funcionando desde get')
}

PruebaCtrl.crear = async function (req, res) {
    
    // Validate request
   if(!req.body.nombre) {
       return res.status(400).send({
           message: "Nombre content can not be empty"
       });
   }

   const estado = new Empleado({
       nombre: req.body.nombre,
       apellido: req.body.apellido,
       salario: req.body.salario
   });

   // Save Note in the database
   
   estado.save()
   .then(data => {
       //res.send(data);
       res.json({mensaje: 'Empleado guardado'});
   }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while creating the Note."
       });
   });
   
}

PruebaCtrl.actualizar=(req,res) => {
    res.send('Funcionando desde put')
}

PruebaCtrl.eliminar=(req,res) => {
    res.send('Funcionando desde delete')
}

module.exports=PruebaCtrl