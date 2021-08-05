import {
  BaseEntity,
  BeforeInsert,
  BeforeRemove,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { UserEntity } from "./user.entity";

@Entity({ name: "messages_" })
export class MessageEntity extends BaseEntity {
  @PrimaryColumn()
  uid!: string;

  @Column({ name: "user_uid" })
  userUid!: string;

  @Column()
  description!: string;

  @Column()
  detail!: string;

  @ManyToOne((_) => UserEntity, (user) => user.messages)
  @JoinColumn({ name: "user_uid", referencedColumnName: "uid" })
  user!: UserEntity;

  @BeforeInsert()
  private antesDeInserir() {
    this.uid = uuid();
  }

}
