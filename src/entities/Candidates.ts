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
  readonly candidatesUuid?: string;

  @OneToOne(() => Vacancy, (vacancy) => vacancy.cadidate, {
    nullable: true,
  })
  vacancy: Vacancy;

  @OneToMany(() => User, (user) => user.candidates, { eager: true })
  user: User[];
}
