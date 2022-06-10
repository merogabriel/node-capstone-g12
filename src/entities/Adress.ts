import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Employee } from "./Employee";
import { Vacancy } from "./Vacancy";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  addressUuid?: string;

  @Column()
  state: string;

  @OneToMany(() => Employee, (employee) => employee.address, { nullable: true })
  employe: Employee[];

  @OneToMany(() => Vacancy, (vacancy) => vacancy.address, { nullable: true })
  vacancy: Vacancy[];

  constructor() {
    if (!this.addressUuid) {
      this.addressUuid = uuid();
    }
  }
}
