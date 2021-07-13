"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var typeorm_1 = require("typeorm");
var AutorRoutes_1 = __importDefault(require("../../../../features/autor/routes/AutorRoutes"));
var Autor_1 = require("./Autor");
var Livro = /** @class */ (function (_super) {
    __extends(Livro, _super);
    function Livro(nome, valor, autorID) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        _this.valor = valor;
        _this.autorID = autorID;
        return _this;
    }
    Livro.prototype.fazerAntesDeInserir = function () {
        console.log("Antes de Inserir");
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Livro.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "descricao" }),
        __metadata("design:type", String)
    ], Livro.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Livro.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column({ name: "id_autor" }),
        __metadata("design:type", Number)
    ], Livro.prototype, "autorID", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Autor_1.Autor; }, function (autor) { return autor.livros; }),
        typeorm_1.JoinColumn({ name: "id_autor", referencedColumnName: "id" }),
        __metadata("design:type", AutorRoutes_1.default)
    ], Livro.prototype, "autor", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Livro.prototype, "fazerAntesDeInserir", null);
    Livro = __decorate([
        typeorm_1.Entity({ name: "livro" }),
        __metadata("design:paramtypes", [String, Number, Number])
    ], Livro);
    return Livro;
}(typeorm_1.BaseEntity));
exports.Livro = Livro;
