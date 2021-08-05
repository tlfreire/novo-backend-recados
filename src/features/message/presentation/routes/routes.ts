import { Router } from "express";
import { CacheRepository } from "../../../../core/infra/repositories/cache.repository";
import {
  EMvc,
  middlewareAdapter,
  MvcController,
  routerMvcAdapter,
} from "../../../../core/presentation";
import MessageRepository from "../../infra/repositories/message.repository";
import { MessageController } from "../controllers";
import { MessageStoreMiddleware, MessageUpdateMiddleware } from "../middlewares";

const makeController = (): MvcController => {
  const repository = new MessageRepository();
  const cache = new CacheRepository();

  return new MessageController(repository, cache);
};

export default class MessageRoutes {
  public init(): Router {
    const routes = Router();

    routes.get("/messages", routerMvcAdapter(makeController(), EMvc.INDEX));

    routes.get("/messages/:uid", routerMvcAdapter(makeController(), EMvc.SHOW));

    routes.post(
      "/messages", // Rota
      middlewareAdapter(new MessageStoreMiddleware()), // middleware
      routerMvcAdapter(makeController(), EMvc.STORE) // Controller
    );

    routes.put(
      "/messages/:uid",
      middlewareAdapter(new MessageUpdateMiddleware()), // middleware
      routerMvcAdapter(makeController(), EMvc.UPDATE)
    );

    routes.delete(
      "/messages/:uid",
      routerMvcAdapter(makeController(), EMvc.DELETE)
    );

    return routes;
  }
}
