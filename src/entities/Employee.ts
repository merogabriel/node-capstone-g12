import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Adress";

@Entity("employees")
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  employeeUuid?: string;

  @ManyToOne(() => Address, (address) => address.employe)
  address: Address;
}
