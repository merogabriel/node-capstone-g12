import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company";
import { User } from "./User";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  addressUuid?: string;

  @Column()
  state: string;

  @OneToMany(() => User, (user) => user.address, { nullable: true })
  user: User[];

  @OneToMany(() => Company, (company) => company.address, { nullable: true })
  company: Company[];
}
