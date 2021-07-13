import express from "express";

import Database from "./core/data/connections/Database";
import RecadoRoutes from "./features/recado/routes/RecadoRoutes";
import UserRoutes from "./features/user/routes/UserRoutes";

const app = express();
// Receber json no corpo da Requisição
app.use(express.json());

// Vincular as rotas
const userRoutes = new UserRoutes().init();
const recadoRoutes = new RecadoRoutes().init();
app.use(userRoutes, recadoRoutes);

const init = async () => {
  await new Database().openConnection();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Rodando on port ${port}`);
  });
};

init();
