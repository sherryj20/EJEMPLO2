const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/empresa', (req, res)=>{     
    conexion.query('SELECT * FROM empresa',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('empresa.ejs', {results:results});            
        }   
    })
})
router.get('/crearempresa', (req,res)=>{
    res.render('crearempresa');
})
router.get('/delete/:idempresa', (req, res) => {
    const idempresa = req.params.idempresa;
    conexion.query('DELETE FROM empresa WHERE idempresa = ?',[idempresa], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/empresa');         
        }
    })
});
router.get('/actualizarempresa/:idempresa', (req,res)=>{    
    const idempresa = req.params.idempresa;
    conexion.query('SELECT * FROM empresa WHERE idempresa=?',[idempresa] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('actualizarempresa.ejs', {empresa:results[0]});            
        }        
    });
});

const empresa = require('./Controller/empresa.js');
  router.post('/guardarempresa', empresa.guardarempresa);
  router.post('/actualizarempresa', empresa.actualizarempresa);



/*const controller = {};
//Funcion para listar registros
controller.list = (req, res) => {
req.getConnection((error,conn) =>{
conn.query('select *from empresa',(err,empresa) =>{
if(err){
res.json(err);
}
});
});
};
//Funcion para guardar registros
controller.save = (req,res) =>{
    const data = req.body;
    req.getConnection((err,conn)=> {
    conn.query('insert into empresa set?', [data], (err,empresa) => {
    console.log(empresa);
    res.redirect('/');
    });
    })
    };
    //Funcion para listar registros
    controller.edit = (req, res) => {
    const {idempresa}= req.params;
    req.getConnection((err,conn) =>{
    conn.query('select *from empresa where idempresa=?', [idempresa], (err,empresa) => {
    res.render('empresa_edit', {
    data: empresa[0]
    } );
    });
    });
    };

    //Funcion para actualizar
controller.update = (req,res) =>{
    const {idempresa}= req.params;
    const nuevo_idempresa = req.body;
    req.getConnection((err, conn) => {
    conn.query('update empresa set ? where idempresa =?', [nuevo_idempresa, idempresa], (err,rows) =>{ 
    res.redirect('/');
    });
    });
    };

    //Funcion para Eliminar registros
    controller.delete = (req,res) =>{
    const {idempresa}= req.params; 
    req.getConnection((err,conn) => {
    conn.query('delete from empresa where idempresa =?', [idempresa], (err, rows) => {
    res.redirect('/');
    });
    })
    };
    */
    //module.exports =controller;
    