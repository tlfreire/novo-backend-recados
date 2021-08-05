"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUser1628107058515 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUser1628107058515 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users_",
            columns: [
                {
                    name: "uid",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "150",
                    isNullable: false
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "100",
                    isNullable: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users_", true, true, true);
    }
}
exports.CreateTableUser1628107058515 = CreateTableUser1628107058515;
