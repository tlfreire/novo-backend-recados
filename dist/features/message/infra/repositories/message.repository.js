"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infra_1 = require("../../../../core/infra");
class MessageRepository {
    async getMessages() {
        const messages = await infra_1.MessageEntity.find();
        return messages.map((message) => {
            return {
                uid: message.uid,
                description: message.description,
                detail: message.detail,
                userUid: message.userUid,
            };
        });
    }
    async getMessage(uid) {
        const message = await infra_1.MessageEntity.findOne(uid);
        if (!message) {
            return undefined;
        }
        return {
            uid: message.uid,
            description: message.description,
            detail: message.detail,
            userUid: message.userUid,
        };
    }
    async create(params) {
        const { description, detail, userUid } = params;
        const message = await infra_1.MessageEntity.create({
            description,
            detail,
            userUid,
        }).save();
        return Object.assign({}, params, message);
    }
    async update(uid, params) {
        const { description, detail, userUid } = params;
        const result = await infra_1.MessageEntity.update(uid, {
            description,
            detail,
            userUid,
        });
    }
    async delete(uid) {
        return await infra_1.MessageEntity.delete(uid);
    }
}
exports.default = MessageRepository;
