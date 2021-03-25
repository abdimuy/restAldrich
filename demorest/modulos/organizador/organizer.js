const dbCon = require("../Configuracion/Config");

function listarOrganizadores(req,res, next){
    dbCon.any("SELECT * FROM organizer")
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"LISTA DE organizadores"
        })
    })
}

function registrarOrganizador(req, res, next){
  const query= "INSERT INTO organizer (name, created_by, updated_by)" 
  + "VALUES (${name}, ${user_id},${user_id} )";
  console.log(req.body);
  dbCon.any(query, req.body)
  .then(function (data){
      res.json({
          status:"ok",
          result:data,
          mensaje:"Organizardor registrado con exito"
      })
  })
  .catch(function(errorbd){
      res.json({
          status:"error",
          result:"sin informacion",
          mensaje:errorbd
      })
  })
}

function eliminarOrganizador(req,res, next){
  var organizer_id= parseInt(req.params.id);
  dbCon.any("DELETE FROM organizer WHERE organizer_id= $1", organizer_id)
  .then(function(data){
      res.json({
          status:"ok",
          result:"sin información",
          mensaje:"Invitado eliminado con exito"
      })
  }).catch(function(errorbd){
      res.json({
          status:"error",
          result:"Sin informacion",
          mensaje:errorbd
      })
  })
}

function editarOrganizador(req, res, next){
  dbCon.none('UPDATE organizer SET name=$1 WHERE organizer_id=$2',
  [req.body.name, req.body.organizer_id])
  .then(function (){
      res.json({
          status:"ok",
          result:"sin información",
          mensaje:"Se edito correctamente"
      })
  })
  .catch(function (errorbd){
      res.json({
          status:"error",
          result: "sin informaciòn",
          mensaje:errorbd
      })
  })
}

module.exports= {
    listarOrganizadores,
    registrarOrganizador,
    eliminarOrganizador,
    editarOrganizador
}