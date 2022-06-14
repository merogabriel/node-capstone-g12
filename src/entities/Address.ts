import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Vacancy } from "./Vacancy";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  addressUuid?: string;

  @Column()
  state: string;

  @OneToMany(() => User, (user) => user.address, { nullable: true })
  user: User[];

  @OneToMany(() => Vacancy, (vacancy) => vacancy.address, { nullable: true })
  vacancy: Vacancy[];

  constructor() {
    if (!this.addressUuid) {
      this.addressUuid = uuid();
    }
  }
}
