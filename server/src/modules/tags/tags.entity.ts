import { BaseEntityExtended } from 'src/utils/entities/base-entity-extended';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import AnimalsEntity from '../animals/animals.entity';

@Entity('tags')
export default class TagsEntity extends BaseEntityExtended {
  @Column({ nullable: false })
  name: string;

  @ManyToMany(() => AnimalsEntity, (animal) => animal.tags, {
    onDelete: 'CASCADE',
  })
  animals: AnimalsEntity[];
}
