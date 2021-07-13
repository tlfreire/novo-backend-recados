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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var Recado_1 = require("./Recado");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(email, senha) {
        var _this = _super.call(this) || this;
        _this.email = email;
        _this.senha = senha;
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({
            name: "id",
            type: "int",
        }),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "email" }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: "senha" }),
        __metadata("design:type", String)
    ], User.prototype, "senha", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Recado_1.Recado; }, function (recado) { return recado.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "recados", void 0);
    User = __decorate([
        typeorm_1.Entity({ name: "user" }),
        __metadata("design:paramtypes", [String, String])
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;
