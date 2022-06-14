import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Vacancy } from "./Vacancy";

@Entity("candidates")
export class Candidate {
  @PrimaryGeneratedColumn("uuid")
  candidatesUuid?: string;

  @OneToOne(() => Vacancy, (vacancy) => vacancy.vacancyUuid, {
    nullable: true,
  })
  @JoinColumn()
  vacancy: Vacancy;

  @OneToMany(() => User, (user) => user.candidates)
  user: User[];

  constructor() {
    if (!this.candidatesUuid) {
      this.candidatesUuid = uuid();
    }
  }
}
