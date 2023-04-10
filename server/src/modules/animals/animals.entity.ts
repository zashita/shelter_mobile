import { BaseEntityExtended } from 'src/utils/entities/base-entity-extended';
import { AnimalSexesEnum } from 'src/utils/enums/animal-sexes.enum';
import { AnimalSizesEnum } from 'src/utils/enums/animal-sizes.enum';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import SpeciesEntity from '../species/species.entity';
import TagsEntity from '../tags/tags.entity';

@Entity('animals')
export default class AnimalsEntity extends BaseEntityExtended {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, type: 'int' })
  age: number;

  @Column({ nullable: false })
  location: string;

  @Column({ nullable: false })
  imageLink: string;

  @Column({ type: 'enum', enum: AnimalSexesEnum, nullable: false })
  sex: AnimalSexesEnum;

  @Column({ type: 'enum', enum: AnimalSizesEnum, nullable: false })
  size: AnimalSizesEnum;

  @ManyToOne(() => SpeciesEntity, (species) => species.animals, {
    onDelete: 'CASCADE',
  })
  species: SpeciesEntity;

  @ManyToMany(() => TagsEntity, (tag) => tag.animals, {
    cascade: true,
  })
  @JoinTable()
  tags: TagsEntity[];
}
