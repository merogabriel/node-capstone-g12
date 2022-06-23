import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Candidate } from "./Candidates";
import { Company } from "./Company";
import { User } from "./User";

@Entity("vacancies")
export class Vacancy {
  @PrimaryGeneratedColumn("uuid")
  readonly vacancyUuid?: string;

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

  @OneToOne(() => User, (user) => user.job, { eager: true })
  @JoinColumn()
  hired: User;

  @ManyToOne(() => Company, (company) => company.vacancies, { eager: true })
  company: Company;

  @OneToOne(() => Candidate, (candidate) => candidate.vacancy, { eager: true })
  @JoinColumn()
  cadidate: Candidate;
}
