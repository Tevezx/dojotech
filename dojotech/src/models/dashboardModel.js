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

function perfil(usuarioId) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuacao()", usuarioId);
    var instrucaoSql = `
        SELECT 
            mensagem AS perfil
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

function historico(usuarioId) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuacao()", usuarioId);
    var instrucaoSql = `
        SELECT 
            r.pontuacao AS pontuacao,
            DATE_FORMAT(r.dataHora, '%d/%m/%y %H:%i') AS data_quiz
        FROM registro_quiz r 
        WHERE r.usuarioId = ${usuarioId} ORDER BY r.dataHora ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ranking(usuarioId) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuacao()", usuarioId);
    var instrucaoSql = `
        SELECT 
            u.nome, 
            SUM(r.pontuacao) AS pontuacao_total
        FROM 
            usuario u
        JOIN 
            registro_quiz r ON u.idUsuario = r.usuarioId     
            GROUP BY 
            u.idUsuario, u.nome
            ORDER BY 
            pontuacao_total DESC
            LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pontuacao,
    perfil,
    faixa,
    historico,
    ranking
}
