import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vacancy } from "./Vacancy";

@Entity("companies")
export class Company {
  @PrimaryGeneratedColumn("uuid")
  coompanyUuid?: string;

  @ManyToOne(() => Vacancy, (vacancy) => vacancy.company)
  vacancies: Vacancy[];
}
