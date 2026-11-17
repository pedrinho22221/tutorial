
const express = require('express');

const app = express();

const alunosRoutes = require('./routes/alunos');
const conexao = require('./config/database');

conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar com MySQL:', erro);
        return;
    }

    console.log('Conectado ao MySQL!');
});

app.use(express.json());

app.use('/alunos', alunosRoutes);

app.get('/', (req, res) => {
    res.send('Minha primeira API está funcionando!');
});

app.get('/sobre', (req, res) => {
    res.send('Sistema de cadastro de alunos.');
});

app.get('/contato', (req, res) => {
    res.send('Entre em contato conosco!');
});

app.get('/professor', (req, res) => {
    res.send({
        nome: "Marcos",
        idade: 35,
        materia: "Programação"
    });
});


const porta = process.env.PORT || 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});

