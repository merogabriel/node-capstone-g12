import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vacancy } from "./Vacancy";

@Entity("companies")
export class Company {
  @PrimaryGeneratedColumn("uuid")
  companyUuid?: string;

  @OneToMany(() => Vacancy, (vacancy) => vacancy.company)
  vacancies: Vacancy[];
}
