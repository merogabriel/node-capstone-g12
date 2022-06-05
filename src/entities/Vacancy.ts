import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('vacancies')
export class Vacancy {
  @PrimaryGeneratedColumn('uuid')
  vacancyUuid?: string
}
