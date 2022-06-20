import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  OneToOne,
  ManyToOne,
} from "typeorm";
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

  @ManyToOne(() => Company, (company) => company.vacancies)
  company: Company;

  @OneToOne(() => Candidate, (candidate) => candidate.candidatesUuid)
  cadidate: Candidate;
}
