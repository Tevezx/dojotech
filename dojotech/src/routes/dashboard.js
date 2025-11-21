var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/pontuacao/:usuarioId", function (req, res) {
    dashboardController.pontuacao(req, res);
});

module.exports = router;