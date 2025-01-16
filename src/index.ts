import express from 'express';
const controllers = require('./controllers/index');
const chat = controllers.chat;
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use(chat);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});