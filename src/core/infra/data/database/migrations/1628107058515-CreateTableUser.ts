import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUser1628107058515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "users_",
            columns: [
              { 
                  name: "uid", 
                  type: "uuid", 
                  isPrimary: true },
              { 
                  name: "email", 
                  type: "varchar", 
                  length: "150", 
                  isNullable: false },
              {
                name: "password",
                type: "varchar",
                length: "100",
                isNullable: false,
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_", true, true, true);
      }
    }
    