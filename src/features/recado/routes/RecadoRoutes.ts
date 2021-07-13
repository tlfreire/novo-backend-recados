import { Router } from "express";
import RecadoController from "../controller/RecadoController";

export default class RecadoRoutes {
  public init(): Router {
    const routes = Router();

    const controller = new RecadoController();

    routes.post("/user/:userId/recados",controller.store);
    routes.get("/recados", controller.index);
    routes.get("/recados/:id", controller.show);
    routes.delete("/recados/:id", controller.delete);
    routes.put("/recados/:id", controller.update);

    return routes;
  }
}
