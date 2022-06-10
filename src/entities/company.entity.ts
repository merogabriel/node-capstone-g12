import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Vacancy } from "./Vacancy";
import { v4 as uuid } from "uuid";

@Entity()
export class Company {
  @PrimaryColumn("uuid")
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
