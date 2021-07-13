"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AutorCamposObrigatorios(req, res, next) {
    var nome = req.body.nome;
    if (!nome) {
        return res.status(400).json({
            msg: "O nome dever ser informado",
        });
    }
    next();
}
exports.default = AutorCamposObrigatorios;
