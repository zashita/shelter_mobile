import { BaseEntityExtended } from 'src/utils/entities/base-entity-extended';
import { Column, Entity, OneToMany } from 'typeorm';
import AnimalsEntity from '../animals/animals.entity';

@Entity('species')
export default class SpeciesEntity extends BaseEntityExtended {
  @Column({ nullable: false })
  name: string;

  @OneToMany(() => AnimalsEntity, (animal) => animal.species)
  animals: AnimalsEntity[];
}
