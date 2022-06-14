import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./Address";
import { User } from "./User";

@Entity("courses")
export class Courses {
  @PrimaryGeneratedColumn("uuid")
  employeeUuid?: string;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.courses)
  user: User[];
}
