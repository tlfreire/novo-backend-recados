"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AutorController_1 = __importDefault(require("../controllers/AutorController"));
var AutorCamposObrigatorios_1 = __importDefault(require("../middlewares/AutorCamposObrigatorios"));
var AutorJaExiste_1 = __importDefault(require("../middlewares/AutorJaExiste"));
var AutorNaoExiste_1 = __importDefault(require("../middlewares/AutorNaoExiste"));
var AutorRoutes = /** @class */ (function () {
    function AutorRoutes() {
    }
    AutorRoutes.prototype.init = function () {
        var routes = express_1.Router();
        var controller = new AutorController_1.default();
        routes.post("/autor", [AutorCamposObrigatorios_1.default, AutorJaExiste_1.default], controller.store);
        routes.get("/autor", controller.index);
        routes.get("/autor/:id", controller.show);
        routes.delete("/autor/:id", controller.delete);
        routes.put("/autor/:id", [AutorNaoExiste_1.default], controller.update);
        return routes;
    };
    return AutorRoutes;
}());
exports.default = AutorRoutes;
