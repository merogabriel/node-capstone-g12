import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Vacancy } from "./Vacancy";

@Entity("candidates")
export class Candidate {
  @PrimaryGeneratedColumn("uuid")
  candidatesUuid?: string;

  @OneToOne(() => Vacancy, (vacancy) => vacancy.vacancyUuid, {
    nullable: false,
  })
  @JoinColumn()
  vacancy: Vacancy;

  constructor() {
    if (!this.candidatesUuid) {
      this.candidatesUuid = uuid();
    }
  }
}
