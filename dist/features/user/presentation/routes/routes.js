"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cache_repository_1 = require("../../../../core/infra/repositories/cache.repository");
const presentation_1 = require("../../../../core/presentation");
const user_repository_1 = __importDefault(require("../../infra/repositories/user.repository"));
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const makeController = () => {
    const repository = new user_repository_1.default();
    const cache = new cache_repository_1.CacheRepository();
    return new controllers_1.UserController(repository, cache);
};
class UserRoutes {
    init() {
        const routes = express_1.Router();
        routes.get("/users", presentation_1.routerMvcAdapter(makeController(), presentation_1.EMvc.INDEX));
        routes.get("/users/:uid", presentation_1.routerMvcAdapter(makeController(), presentation_1.EMvc.SHOW));
        routes.post("/users", presentation_1.middlewareAdapter(new middlewares_1.UserMiddleware()), presentation_1.routerMvcAdapter(makeController(), presentation_1.EMvc.STORE));
        routes.put("/users/:uid", presentation_1.routerMvcAdapter(makeController(), presentation_1.EMvc.UPDATE));
        routes.delete("/users/:uid", presentation_1.routerMvcAdapter(makeController(), presentation_1.EMvc.DELETE));
        return routes;
    }
}
exports.default = UserRoutes;
