import express from 'express';
import chatRoute from "./controllers/chatController";
import rootRoute from "./controllers/rootController";
import templateRoute from "./controllers/templateController";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(rootRoute);

app.use(chatRoute);

app.use(templateRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});