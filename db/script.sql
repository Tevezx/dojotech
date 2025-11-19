CREATE DATABASE dojotech;
USE dojotech;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(60) UNIQUE NOT NULL,
CONSTRAINT chk_email CHECK(email LIKE '%@%' AND email LIKE '%.com'),
senha VARCHAR(30) NOT NULL
);

CREATE TABLE faixa(
idFaixa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
usuarioId INT,
FOREIGN KEY (usuarioId) REFERENCES usuario(idUsuario)
);

CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE tentativas(
usuarioId INT,
quizId INT,
PRIMARY KEY(usuarioId, quizId),
FOREIGN KEY (usuarioId) REFERENCES usuario(idUsuario),
FOREIGN KEY (quizId) REFERENCES quiz(idQuiz)
);

CREATE TABLE perguntas(
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(70) NOT NULL,
quizId INT,
FOREIGN KEY (quizId) REFERENCES quiz(idQuiz)
);

CREATE TABLE respostas(
idResposta INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(70) NOT NULL
);

CREATE TABLE pontuacao(
perguntaId INT,
respostaId INT,
pontuacao INT,
PRIMARY KEY(perguntaId, respostaId),
FOREIGN KEY (perguntaId) REFERENCES perguntas(idPergunta),
FOREIGN KEY (respostaId) REFERENCES respostas(idResposta)
);

