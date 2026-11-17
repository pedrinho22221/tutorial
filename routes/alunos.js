const express = require('express');

const router = express.Router();

const conexao = require('../config/database');

router.get('/', (req, res) => {

    conexao.query('SELECT * FROM alunos', (erro, resultados) => {

        if (erro) {
            res.send(erro);
            return;
        }

        res.send(resultados);

    });

});

router.post('/', (req, res) => {

    const aluno = req.body;
    const sql = 'INSERT INTO alunos (nome, idade, curso) VALUES (?, ?, ?)';
    const valores = [aluno.nome, aluno.idade, aluno.curso];
    conexao.query(sql, valores, (erro, resultado) => {

        if (erro) {
    res.status(500).send(erro);
    return;
}

res.status(201).send({
    mensagem: 'Aluno cadastrado com sucesso!',
    id: resultado.insertId
});

});

});

module.exports = router;    