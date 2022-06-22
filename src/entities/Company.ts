import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Vacancy } from "./Vacancy";
import { v4 as uuid } from "uuid";
import { Address } from "./Address";

@Entity("company")
export class Company {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  password: string;

  @OneToMany(() => Vacancy, (vacancy) => vacancy.company, {
    onDelete: "CASCADE",
  })
  vacancies: Vacancy[];

  @ManyToOne(() => Address, (address) => address.company)
  address: Address;
}
