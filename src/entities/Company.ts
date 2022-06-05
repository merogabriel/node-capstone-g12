import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  coompanyUuid?: string
}
