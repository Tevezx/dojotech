# 🥋 DojoTech: Quiz de Conhecimento e Performance em Hapkido

O **DojoTech** é uma aplicação Full Stack projetada para aumentar a visibilidade e disseminar o conhecimento sobre o **Hapkido**—uma arte marcial coreana completa. O projeto funciona como um **Quiz Rápido** de perguntas e respostas, onde o desempenho do usuário é imediatamente classificado em uma **Dashboard de Performance** que mapeia a pontuação final a uma "faixa" de graduação virtual.

Este projeto cumpre os requisitos do Desafio Individual, integrando uma aplicação interativa com conceitos de Algoritmos/Matemática, visualização de dados e arquitetura Full Stack.

---

## 🎯 Principais Funcionalidades

O DojoTech se concentra em três pilares principais:

1.  **Quiz Rápido de Conhecimento:** Um conjunto de perguntas básicas sobre autodefesa, história e princípios do Hapkido.
2.  **Sistema de Pontuação Algorítmica:** O usuário acumula entre **0 e 500 pontos** com base nas respostas corretas.
3.  **Dashboard de Performance (Certificado de Faixa):**
    * Visualização imediata da pontuação alcançada.
    * O resultado é mapeado em uma **"Faixa"** virtual (Branca, Amarela, Azul, Vermelha ou Preta), que é exibida graficamente via **Chart.js** para gamificação e análise.

---

## 🚀 Tecnologias e Arquitetura

O projeto adota uma arquitetura robusta para suportar a lógica do quiz e a visualização dinâmica dos resultados.

| Categoria | Tecnologia | Função Principal |
| :--- | :--- | :--- |
| **Frontend** | **HTML, CSS, JavaScript (JS)** | Interface do usuário e lógica de execução do quiz. |
| **Visualização** | **Chart.js** | Geração do Dashboard e mapeamento da pontuação para a classificação das faixas. |
| **Backend (API)** | **Node.js** | API de **Login/Cadastro** (para expansões) e futura manipulação da base de perguntas. |
| **Banco de Dados** | **MySQL** | Persistência dos dados (perguntas, usuários e pontuações). |
| **Infraestrutura** | **VM Linux** | Hospedagem do Banco de Dados para simular um ambiente de produção. |
| **Governança** | **Git/GitHub, Trello** | Controle de versão e gestão ágil do projeto. |

---

## 📊 Aplicação de Conceitos Técnicos

O projeto é um excelente exemplo da aplicação prática de conceitos exigidos na disciplina:

| Disciplina | Requisito Cumprido |
| :--- | :--- |
| **Algoritmos & Matemática** | **Funções JS e Condicionais** aplicadas para calcular a pontuação e determinar a **Faixa** final do usuário (0-500 pontos). |
| **Banco de Dados** | Modelo Lógico com tabelas para Perguntas, Respostas e Pontuações Salvas. |
| **Sistemas Operacionais** | Utilização do BD (`MySQL`) em uma **VM Linux** (simulação de *deploy*). |
| **Pesquisa e Inovação** | Criação do Dashboard interativo com o **Chart.js** para visualização gamificada. |

---

## 🛠️ Como Iniciar o Quiz

1.  Clone o repositório: `git clone https://github.com/Tevezx/dojotech.git`
2.  Configure o Banco de Dados (**DojoTech**) na VM Linux e execute o script de criação de tabelas.
3.  Inicie a API Node.js (necessária para rotas futuras de login e dados):
    * No diretório `backend`: `npm install` e `npm start`
4.  Abra o arquivo `index.html` em seu navegador para começar o quiz e conferir sua graduação!
