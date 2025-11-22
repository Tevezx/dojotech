var quizModel = require("../models/quizModel");

function publicar(req, res) {
    var pontuacao = req.body.pontuacaoFinalServer;
    var usuarioId = req.body.usuarioIdServer;


    if (usuarioId == undefined) {
        res.status(403).send("O id do usuário está indefinido!"); 
    } else if (pontuacao == undefined) {
        res.status(403).send("A pontuação do usuário está indefinida!");
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


function finalizar(req, res) {
    var textoParaMensagemFinalServer = req.body.textoParaMensagemFinalServer;
    var usuarioId = req.body.usuarioIdServer;


    if (usuarioId == undefined) {
        res.status(403).send("O id do usuário está indefinido!"); 
    } else if (textoParaMensagemFinalServer == undefined) {
        res.status(403).send("A pontuação do usuário está indefinida!");
    } else {
        quizModel.finalizar(usuarioId, textoParaMensagemFinalServer)
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

function faixa(req, res) {
    var textoFaixa = req.body.textoFaixaServer;
    var usuarioId = req.body.usuarioIdServer;


    if (usuarioId == undefined) {
        res.status(403).send("O id do usuário está indefinido!"); 
    } else if (textoFaixa == undefined) {
        res.status(403).send("A faixa do usuário está indefinida!");
    } else {
        quizModel.faixa(usuarioId, textoFaixa)
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
        publicar, 
        finalizar,
        faixa
    }