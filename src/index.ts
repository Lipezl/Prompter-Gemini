import express from 'express';
import chatRoute from "./controllers/chatController";
import rootRoute from "./controllers/rootController";
import templateRoute from "./controllers/templateController";
import categorieRoute from "./controllers/categoriesController";
const app = express();
const port = 3000;

app.use(express.json());

app.use(categorieRoute)

app.use(chatRoute);

app.use(rootRoute);

app.use(templateRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});