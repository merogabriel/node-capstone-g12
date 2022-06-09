import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Company } from "./Company";
import { Employee } from "./Employee";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  addressUuid?: string;

  //   @ManyToOne(() => Company, (company) => company.address)
  //   company: Company;

  constructor() {
    if (!this.addressUuid) {
      this.addressUuid = uuid();
    }
  }
}
