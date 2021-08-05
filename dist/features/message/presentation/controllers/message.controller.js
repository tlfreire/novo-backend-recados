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
var _MessageController_repository, _MessageController_cache;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const presentation_1 = require("../../../../core/presentation");
class MessageController {
    constructor(repository, cache) {
        _MessageController_repository.set(this, void 0);
        _MessageController_cache.set(this, void 0);
        __classPrivateFieldSet(this, _MessageController_repository, repository, "f");
        __classPrivateFieldSet(this, _MessageController_cache, cache, "f");
    }
    async store(request) {
        try {
            const result = await __classPrivateFieldGet(this, _MessageController_repository, "f").create(request.body);
            return presentation_1.ok(result);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async index(request) {
        try {
            const messages = await __classPrivateFieldGet(this, _MessageController_repository, "f").getMessages();
            return presentation_1.ok(messages);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async show(request) {
        const { uid } = request.params;
        try {
            const message = await __classPrivateFieldGet(this, _MessageController_repository, "f").getMessage(uid);
            if (!message) {
                return presentation_1.notFound(new presentation_1.DataNotFoundError());
            }
            return presentation_1.ok(message);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async delete(request) {
        const { uid } = request.params;
        try {
            const result = await __classPrivateFieldGet(this, _MessageController_repository, "f").delete(uid);
            return presentation_1.ok(result);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async update(request) {
        const { uid } = request.params;
        try {
            const result = await __classPrivateFieldGet(this, _MessageController_repository, "f").update(uid, request.body);
            return presentation_1.ok(result);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
}
exports.MessageController = MessageController;
_MessageController_repository = new WeakMap(), _MessageController_cache = new WeakMap();
