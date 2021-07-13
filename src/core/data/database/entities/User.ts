import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Recado } from "./Recado"

@Entity({ name: "user" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "int",
  })
  id?: number;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "senha" })
  senha: string;

  @OneToMany(() => Recado, (recado) => recado.user)
  recados?: Recado[];

  constructor(email: string, senha: string) {
    super();
    this.email = email;
    this.senha = senha;
  }
}
