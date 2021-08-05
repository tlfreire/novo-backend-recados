"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infra_1 = require("../../../../core/infra");
class UserRepository {
    constructor() {
        this.teste = "";
    }
    async getUsers() {
        const users = await infra_1.UserEntity.find();
        return users.map((user) => {
            return {
                uid: user.uid,
                email: user.email,
                password: user.password
            };
        });
    }
    async getUser(uid) {
        const user = await infra_1.UserEntity.findOne(uid);
        if (!user)
            return undefined;
        return {
            uid: user.uid,
            email: user.email,
            password: user.password
        };
    }
    async create(params) {
        const { email, password } = params;
        const user = await infra_1.UserEntity.create({
            email,
            password
        }).save();
        return Object.assign({}, params, user);
    }
    async update(id, params) {
        const { email, password } = params;
        const result = await infra_1.UserEntity.update(id, {
            email,
            password
        });
        return Object.assign({}, params, result);
    }
    async delete(id) {
        return await infra_1.UserEntity.delete(id);
    }
}
exports.default = UserRepository;
