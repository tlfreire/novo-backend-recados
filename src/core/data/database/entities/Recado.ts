import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import UserRoutes from "../../../../features/user/routes/UserRoutes";
import { User } from "./User";

@Entity({ name: "recado" })
export class Recado extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: "descricao" })
  descricao: string;

  @Column({ name: "detalhe" })
  detalhe: string;

  @Column({ name: "id_user" })
  userId?: number;

  @ManyToOne(() => User, (user) => user.recados)
  @JoinColumn({ name: "id_user", referencedColumnName: "id" })
  user?: UserRoutes;

  constructor(descricao: string, detalhe: string, userId: number) {
    super();
    this.descricao = descricao;
    this.detalhe = detalhe;
    this.userId = userId;
  }
}
