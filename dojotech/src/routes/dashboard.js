var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/pontuacao/:usuarioId", function (req, res) {
    dashboardController.pontuacao(req, res);
});

router.get("/perfil/:usuarioId", function(req, res){
    dashboardController.perfil(req, res);
});

router.get("/faixa/:usuarioId", function(req, res){
    dashboardController.faixa(req, res);
})

router.get("/historico/:usuarioId", function(req, res){
    dashboardController.historico(req, res);
})


module.exports = router;