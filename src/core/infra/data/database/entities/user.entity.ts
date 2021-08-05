import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { MessageEntity } from "./message.entity";

@Entity({ name: "users_" })
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  uid!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany((_) => MessageEntity, (message) => message.user)
  messages?: MessageEntity[];

  @BeforeInsert()
  private beforeInsert() {
    this.uid = uuid();
  }

}
