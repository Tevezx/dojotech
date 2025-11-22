var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/publicar", function(req, res){
    quizController.publicar(req, res);
})

router.post("/finalizarJogo", function(req, res){
    quizController.finalizar(req, res)
})

module.exports = router;