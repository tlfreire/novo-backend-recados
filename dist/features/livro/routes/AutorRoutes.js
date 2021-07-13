"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var LivroController_1 = __importDefault(require("../controllers/LivroController"));
var LivroRoutes = /** @class */ (function () {
    function LivroRoutes() {
    }
    LivroRoutes.prototype.init = function () {
        var routes = express_1.Router();
        var controller = new LivroController_1.default();
        routes.post("/livro", controller.store);
        routes.get("/livro/:id", controller.show);
        return routes;
    };
    return LivroRoutes;
}());
exports.default = LivroRoutes;
