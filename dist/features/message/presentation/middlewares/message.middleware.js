"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateMiddleware = exports.MessageStoreMiddleware = void 0;
const presentation_1 = require("../../../../core/presentation");
class MessageStoreMiddleware {
    async handle(req) {
        const { body } = req;
        for (const field of ["description", "detail", "userUid"]) {
            const error = new presentation_1.RequireFieldsValidator(field).validate(body);
            if (error) {
                return presentation_1.badRequest(error);
            }
        }
        return presentation_1.ok({});
    }
}
exports.MessageStoreMiddleware = MessageStoreMiddleware;
class MessageUpdateMiddleware {
    async handle(req) {
        const { body } = req;
        for (const field of ["description", "detail", "userUid"]) {
            const error = new presentation_1.RequireFieldsValidator(field).validate(body);
            if (error) {
                return presentation_1.badRequest(error);
            }
        }
        return presentation_1.ok({});
    }
}
exports.MessageUpdateMiddleware = MessageUpdateMiddleware;
