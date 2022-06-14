import { Entity, Column, PrimaryColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vacancy } from "./Vacancy";
import { v4 as uuid } from "uuid";

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

  @OneToMany(() => Vacancy, (vacancy) => vacancy.company)
  vacancies: Vacancy[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
