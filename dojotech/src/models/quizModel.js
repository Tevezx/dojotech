var database = require("../database/config");

function publicar(usuarioId, pontuacao, textoParaMensagemFinal){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", usuarioId, pontuacao, textoParaMensagemFinal);
    var instrucaoSql = `
    INSERT INTO registro_quiz (usuarioId, pontuacao) VALUES (${usuarioId}, ${pontuacao})`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function finalizar(usuarioId, textoParaMensagemFinal){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", usuarioId, textoParaMensagemFinal);
    var instrucaoSql = `
        UPDATE registro_quiz 
        SET mensagem = '${textoParaMensagemFinal}'
        WHERE usuarioId = ${usuarioId}
        ORDER BY idRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function faixa(usuarioId, textoFaixa){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", usuarioId, textoFaixa);
    var instrucaoSql = `
    UPDATE usuario 
    SET faixaId = (
        SELECT idFaixa 
        FROM faixa 
        WHERE nome = '${textoFaixa}'
    )
    WHERE idUsuario = ${usuarioId};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    publicar,
    finalizar,
    faixa
}
