const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost', 
    user: 'jeff',
    password: '1234', 
    database: 'cadastro' 
});

db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar no banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados estabelecida!');
});

// Rota para adicionar um usuário ao banco de dados
app.post('/addUser', (req, res) => {
    const { username, email, password } = req.body;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            res.status(500).send('Erro ao inserir usuário.');
            return;
        }
        res.send('Usuário cadastrado com sucesso!');
    });
});

// Rota para buscar todos os usuários
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar usuários.');
            return;
        }
        res.json(results);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
