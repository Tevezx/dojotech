var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/publicar", function(req, res){
    quizController.publicar(req, res);
})

module.exports = router;