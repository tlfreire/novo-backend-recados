"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleware = void 0;
const presentation_1 = require("../../../../core/presentation");
class UserMiddleware {
    async handle(req) {
        const { body } = req;
        for (const field of ["email", "password"]) {
            const error = new presentation_1.RequireFieldsValidator(field).validate(body);
            if (error) {
                return presentation_1.badRequest(error);
            }
        }
        return presentation_1.ok({});
    }
}
exports.UserMiddleware = UserMiddleware;
