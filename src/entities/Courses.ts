import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
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
