var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//aqui definimos el endpoint (la url para acceder al recurso listarInvitados)
const invitados= require("../modulos/invitados/guest");
router.get('/v1/guest', invitados.listaInvitados)
const EstatusAsistencia= require("../modulos/EstatusAsistencia/EstatusAsistencia");
router.get('/v1/assistance', EstatusAsistencia.listaEstatusAsistencia)

//aqui definimos el endpoint (la url para acceder al recurso listarInvitados)
const organizador= require("../modulos/organizador/organizer");
//get lista de invitados
router.get('/v1/organizer', organizador.listarOrganizadores)
router.post('/v1/organizer', organizador.registrarOrganizador);
router.delete("/v1/organizer/:id", organizador.eliminarOrganizador);
router.put("/v1/organizer", organizador.editarOrganizador);

module.exports = router;
