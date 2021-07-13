import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableRecados1626110097132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "recado",
            columns: [
              {
                name: "id",
                type: "serial",
                isPrimary: true,
                isNullable: false,
              },
              {
                name: "descricao",
                type: "varchar",
                length: "100",
                isNullable: false,
              },
              {
                name: "detalhe",
                type: "varchar",
                length: "100",
                isNullable: false,
              },
              {
                name: "id_user",
                type: "int",
                isNullable: false,
              },
            ],
            foreignKeys: [
              new TableForeignKey({
                columnNames: ["id_user"],
                referencedColumnNames: ["id"],
                referencedTableName: "user",
              }),
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("recados");
      }
    }
    