"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RecadoController_1 = __importDefault(require("../controller/RecadoController"));
var RecadoRoutes = /** @class */ (function () {
    function RecadoRoutes() {
    }
    RecadoRoutes.prototype.init = function () {
        var routes = express_1.Router();
        var controller = new RecadoController_1.default();
        routes.post("/user/:userId/recados", controller.store);
        routes.get("/recados", controller.index);
        routes.get("/recados/:id", controller.show);
        routes.delete("/recados/:id", controller.delete);
        routes.put("/recados/:id", controller.update);
        return routes;
    };
    return RecadoRoutes;
}());
exports.default = RecadoRoutes;
