var dashboardModel = require("../models/dashboardModel");

function pontuacao(req, res) {
    var usuarioId = req.params.usuarioId;

    dashboardModel.pontuacao(usuarioId)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar a pontuacao: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function fraqueza(req, res) {
    var usuarioId = req.params.usuarioId;

    dashboardModel.fraqueza(usuarioId)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar a fraqueza: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function faixa(req, res) {
    var usuarioId = req.params.usuarioId;

    dashboardModel.faixa(usuarioId)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar a fraqueza: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    pontuacao,
    fraqueza,
    faixa
}