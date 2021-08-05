"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableMessage1628107080116 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableMessage1628107080116 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "messages_",
            columns: [
                {
                    name: "uid",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "detail",
                    type: "varchar",
                    length: "150",
                    isNullable: false,
                },
                {
                    name: "description",
                    type: "varchar",
                    length: "500",
                    isNullable: false,
                },
                {
                    name: "user_uid",
                    type: "uuid",
                    isNullable: false,
                },
            ],
            foreignKeys: [
                new typeorm_1.TableForeignKey({
                    columnNames: ["user_uid"],
                    referencedColumnNames: ["uid"],
                    referencedTableName: "users_",
                    name: "fk_message_user",
                }),
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("messages_", true, true, true);
    }
}
exports.CreateTableMessage1628107080116 = CreateTableMessage1628107080116;
