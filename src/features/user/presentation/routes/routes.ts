import { Router } from "express";
import { CacheRepository } from "../../../../core/infra/repositories/cache.repository";
import {
  EMvc,
  middlewareAdapter,
  MvcController,
  routerMvcAdapter,
} from "../../../../core/presentation";
import UserRepository from "../../infra/repositories/user.repository";
import { UserController } from "../controllers";
import { UserMiddleware } from "../middlewares";

const makeController = (): MvcController => {
  const repository = new UserRepository();
  const cache = new CacheRepository();
  return new UserController(repository, cache);
};

export default class UserRoutes {
  public init(): Router {
    const routes = Router();

    routes.get("/users", routerMvcAdapter(makeController(), EMvc.INDEX));
    routes.get("/users/:uid", routerMvcAdapter(makeController(), EMvc.SHOW));

    routes.post(
      "/users",
      middlewareAdapter(new UserMiddleware()),
      routerMvcAdapter(makeController(), EMvc.STORE)
    );

    routes.put(
      "/users/:uid",
      routerMvcAdapter(makeController(), EMvc.UPDATE)
    );

    routes.delete(
      "/users/:uid",
      routerMvcAdapter(makeController(), EMvc.DELETE)
    );

    return routes;
  }
}
