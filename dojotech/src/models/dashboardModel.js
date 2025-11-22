var database = require("../database/config");

function pontuacao(usuarioId) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuacao()", usuarioId);
    var instrucaoSql = `
        SELECT 
            pontuacao AS pontuacao
        FROM registro_quiz 
            WHERE usuarioId = ${usuarioId}
                ORDER BY idRegistro DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function fraqueza(usuarioId) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuacao()", usuarioId);
    var instrucaoSql = `
        SELECT 
            mensagem AS fraqueza
        FROM registro_quiz 
            WHERE usuarioId = ${usuarioId}
                ORDER BY idRegistro DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function faixa(usuarioId) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuacao()", usuarioId);
    var instrucaoSql = `
        SELECT 
            f.nome AS faixa 
        FROM usuario u 
        LEFT JOIN faixa f ON u.faixaId = f.idFaixa
        WHERE u.idUsuario = ${usuarioId} LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    pontuacao,
    fraqueza,
    faixa
}
