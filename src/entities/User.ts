import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Address } from "./Address";
import { Candidate } from "./Candidates";
import { Courses } from "./Courses";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;

  @Column()
  age: number;

  @Column()
  hired: Boolean;

  @ManyToMany(() => Courses, (course) => course.user, {
    eager: true,
    nullable: true,
  })
  @JoinTable()
  courses: Courses[];
  
  @ManyToOne(() => Candidate, (candidates) => candidates.user, {
    nullable: true,
  })
  candidates: Candidate;

  @ManyToOne(() => Address, (address) => address.user, { nullable: true })
  address: Address;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
