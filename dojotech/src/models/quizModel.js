var database = require("../database/config");

function publicar(usuarioId, pontuacao){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", usuarioId, pontuacao);
    var instrucaoSql = `
    INSERT INTO registro_quiz (usuarioId, pontuacao) VALUES (${usuarioId}, ${pontuacao})`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    publicar
}
