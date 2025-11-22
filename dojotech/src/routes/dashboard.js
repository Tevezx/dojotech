var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/pontuacao/:usuarioId", function (req, res) {
    dashboardController.pontuacao(req, res);
});

router.get("/fraqueza/:usuarioId", function(req, res){
    dashboardController.fraqueza(req, res);
})


module.exports = router;