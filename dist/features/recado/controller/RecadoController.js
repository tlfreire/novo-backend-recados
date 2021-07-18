"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Recado_1 = require("../../../core/data/database/entities/Recado");
var User_1 = require("../../../core/data/database/entities/User");
var RecadoController = /** @class */ (function () {
    function RecadoController() {
    }
    RecadoController.prototype.store = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a, descricao, detalhe, user, recado;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = req.params.userId;
                        _a = req.body, descricao = _a.descricao, detalhe = _a.detalhe;
                        return [4 /*yield*/, User_1.User.findOne(userId)];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).json({
                                    msg: "Usuario não encontrado",
                                })];
                        }
                        return [4 /*yield*/, new Recado_1.Recado(detalhe, descricao, parseInt(userId)).save()];
                    case 2:
                        recado = _b.sent();
                        return [2 /*return*/, res.status(200).json(recado)];
                }
            });
        });
    };
    RecadoController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, recado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Recado_1.Recado.find()];
                    case 1:
                        recado = _a.sent();
                        return [2 /*return*/, res.json(recado)];
                }
            });
        });
    };
    RecadoController.prototype.show = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, recado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Recado_1.Recado.findOne(id)];
                    case 1:
                        recado = _a.sent();
                        return [2 /*return*/, res.json(recado)];
                }
            });
        });
    };
    RecadoController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Recado_1.Recado.delete(id)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, res
                                .status(200)
                                .json(result.affected > 0 ? "Recado excluido" : "Não removeu")];
                }
            });
        });
    };
    RecadoController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, descricao, detalhe, recado, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, descricao = _a.descricao, detalhe = _a.detalhe;
                        return [4 /*yield*/, Recado_1.Recado.findOne(id)];
                    case 1:
                        recado = _b.sent();
                        if (!recado) {
                            return [2 /*return*/, res.status(404).json({
                                    msg: "Recado não encontrado",
                                })];
                        }
                        return [4 /*yield*/, Recado_1.Recado.update(id, {
                                descricao: descricao,
                                detalhe: detalhe,
                            })];
                    case 2:
                        result = _b.sent();
                        return [2 /*return*/, res.json(result)];
                }
            });
        });
    };
    return RecadoController;
}());
exports.default = RecadoController;
