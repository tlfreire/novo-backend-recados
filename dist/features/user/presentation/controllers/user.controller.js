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
var _UserController_repository, _UserController_cache;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const presentation_1 = require("../../../../core/presentation");
class UserController {
    constructor(repository, cache) {
        _UserController_repository.set(this, void 0);
        _UserController_cache.set(this, void 0);
        __classPrivateFieldSet(this, _UserController_repository, repository, "f");
        __classPrivateFieldSet(this, _UserController_cache, cache, "f");
    }
    async index() {
        try {
            const cache = await __classPrivateFieldGet(this, _UserController_cache, "f").get("user_:all");
            if (cache) {
                return presentation_1.ok(cache.map((user) => Object.assign({}, user, {
                    cache: true,
                })));
            }
            const users = await __classPrivateFieldGet(this, _UserController_repository, "f").getUsers();
            await __classPrivateFieldGet(this, _UserController_cache, "f").set("user_:all", users);
            return presentation_1.ok(users);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async delete(request) {
        const { uid } = request.params;
        try {
            const result = await __classPrivateFieldGet(this, _UserController_repository, "f").delete(uid);
            return presentation_1.ok(result);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async store(request) {
        try {
            const result = await __classPrivateFieldGet(this, _UserController_repository, "f").create(request.body);
            await __classPrivateFieldGet(this, _UserController_cache, "f").del("user_:all");
            return presentation_1.ok(result);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async show(request) {
        const { uid } = request.params;
        try {
            const cache = await __classPrivateFieldGet(this, _UserController_cache, "f").get(`user_:${uid}`);
            if (cache) {
                return presentation_1.ok(Object.assign({}, cache, { cache: true }));
            }
            const user = await __classPrivateFieldGet(this, _UserController_repository, "f").getUser(uid);
            if (!user) {
                return presentation_1.notFound(new presentation_1.DataNotFoundError());
            }
            await __classPrivateFieldGet(this, _UserController_cache, "f").setex(`user_:${uid}`, user, 20);
            return presentation_1.ok(user);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async update(request) {
        const { uid } = request.params;
        console.log(request.body);
        try {
            const result = await __classPrivateFieldGet(this, _UserController_repository, "f").update(uid, request.body);
            return presentation_1.ok(result);
        }
        catch (error) {
            console.log(error);
            return presentation_1.serverError();
        }
    }
}
exports.UserController = UserController;
_UserController_repository = new WeakMap(), _UserController_cache = new WeakMap();
