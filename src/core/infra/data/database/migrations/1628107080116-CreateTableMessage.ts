import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableMessage1628107080116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
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
              new TableForeignKey({
                columnNames: ["user_uid"],
                referencedColumnNames: ["uid"],
                referencedTableName: "users_",
                name: "fk_message_user",
              }),
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages_", true, true, true);
      }
    }