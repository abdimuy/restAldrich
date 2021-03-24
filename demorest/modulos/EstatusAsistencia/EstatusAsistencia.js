//aqui va el metodo para listar invitados
const dbCon = require("../Configuracion/Config");

function listaEstatusAsistencia(req,res,next){
    dbCon.any('SELECT * FROM status_assistance')
    .then(function(data){
        res.json({
            status:"ok",
            result: data,
            mensaje:"Lista de invitados ok"
        })
    })
}


module.exports= {
  listaEstatusAsistencia
}