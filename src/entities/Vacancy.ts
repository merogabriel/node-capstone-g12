import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  OneToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { string } from "yup";
import { Candidate } from "./Candidates";
import { Company } from "./Company";

@Entity("vacancies")
export class Vacancy {
  @PrimaryGeneratedColumn("uuid")
  vacancyUuid?: string;

  @Column()
  name: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @Column({ nullable: false })
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Company, (company) => company.vacancies)
  company: Company;

  @OneToOne(() => Candidate, (candidate) => candidate.candidatesUuid)
  cadidate: Candidate;

  constructor() {
    if (!this.vacancyUuid) {
      this.vacancyUuid = uuid();
    }
  }
}
