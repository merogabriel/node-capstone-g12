import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  employeeUuid?: string
}
