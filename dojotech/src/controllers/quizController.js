var quizModel = require("../models/quizModel");

function publicar(req, res) {
    var pontuacao = req.body.pontuacaoFinalServer;
    var usuarioId = req.body.usuarioIdServer;


    if (usuarioId == undefined) {
        res.status(403).send("O id do usuário está indefinido!"); // Restaurando a segurança
    } else if (pontuacao == undefined) {
        res.status(403).send("A pontuação do usuário está indefinida!"); // Restaurando a segurança
    } else {
        quizModel.publicar(usuarioId, pontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

    module.exports = {
        publicar
    }