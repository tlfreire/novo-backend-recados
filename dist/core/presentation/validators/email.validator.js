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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _EmailValidator_fieldName;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidator = void 0;
const invalid_param_error_1 = require("../errors/invalid-param.error");
const validator_1 = __importDefault(require("validator"));
class EmailValidator {
    constructor(fieldName) {
        _EmailValidator_fieldName.set(this, void 0);
        __classPrivateFieldSet(this, _EmailValidator_fieldName, fieldName, "f");
    }
    validate(input) {
        if (!validator_1.default.isEmail(input[__classPrivateFieldGet(this, _EmailValidator_fieldName, "f")])) {
            return new invalid_param_error_1.InvalidParamError(__classPrivateFieldGet(this, _EmailValidator_fieldName, "f"));
        }
    }
}
exports.EmailValidator = EmailValidator;
_EmailValidator_fieldName = new WeakMap();
