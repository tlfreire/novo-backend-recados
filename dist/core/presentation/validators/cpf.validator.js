"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CPFValidator_fieldName;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPFValidator = void 0;
const invalid_param_error_1 = require("../errors/invalid-param.error");
const utils_1 = require("../../../utils");
class CPFValidator {
    constructor(fieldName) {
        _CPFValidator_fieldName.set(this, void 0);
        __classPrivateFieldSet(this, _CPFValidator_fieldName, fieldName, "f");
    }
    validate(input) {
        if (!utils_1.isValidCPF(input[__classPrivateFieldGet(this, _CPFValidator_fieldName, "f")])) {
            return new invalid_param_error_1.InvalidParamError(__classPrivateFieldGet(this, _CPFValidator_fieldName, "f"));
        }
    }
}
exports.CPFValidator = CPFValidator;
_CPFValidator_fieldName = new WeakMap();
