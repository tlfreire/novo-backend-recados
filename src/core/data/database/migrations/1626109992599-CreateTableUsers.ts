import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUsers1626109992599 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "user",
            columns: [
              {
                name: "id",
                type: "serial",
                isPrimary: true,
                isNullable: false,
                comment: "Chave primaria da Tabela Users",
              },
              {
                name: "email",
                type: "varchar",
                length: "100",
                isNullable: false,
              },
              {
                name: "senha",
                type: "varchar",
                length: "100",
                isNullable: false,
              },
            ],
        })
        );
      }

public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");

}

}
