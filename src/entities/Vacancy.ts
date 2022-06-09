import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { string } from "yup";

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

  constructor() {
    if (!this.vacancyUuid) {
      this.vacancyUuid = uuid();
    }
  }
}
