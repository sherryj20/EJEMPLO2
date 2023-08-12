const conexion = require('../database/db');
//GUARDAR un empleados

exports.guardarempresa = (req, res)=>{

    const idempresa = req.body.idempresa;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const rtn = req.body.rtn;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    const contacto = req.body.contacto;
    const fecha_creacion = req.body.fecha_creacion;
    const estado = req.body.estado;
   


    conexion.query('INSERT INTO empresa SET ?',{idempresa:idempresa, nombre:nombre, direccion:direccion, rtn:rtn, telefono:telefono, correo:correo, contacto:contacto, fecha_creacion:fecha_creacion, estado:estado}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);   
            res.redirect('/empresa');         
        }
});
};

//ACTUALIZAR un REGISTRO
exports.actualizarempresa= (req, res)=>{
    const idempresa = req.body.idempresa;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const rtn = req.body.rtn;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    const contacto = req.body.contacto;
    const fecha_creacion = req.body.fecha_creacion;
    const estado = req.body.estado;
 
  
    conexion.query('UPDATE empresa SET ? WHERE idempresa =?', [{idempresa:idempresa, nombre:nombre, direccion:direccion, rtn:rtn, telefono:telefono, correo:correo, contacto:contacto, fecha_creacion:fecha_creacion, estado:estado},idempresa ], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/empresa');         
        }
});
};