import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StarSystemEntity } from './star-system.entity';
import { CharacterEntity } from './character.entity';

@Entity({ name: 'planets' })
export class PlanetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  climate: string;

  @Column()
  terrain: string;

  @Column()
  population: number;

  @ManyToOne(() => StarSystemEntity, (starSystem) => starSystem.listPlanets)
  startSystem: StarSystemEntity;

  @OneToMany(() => CharacterEntity, (character) => character.homeworld)
  characters: CharacterEntity[];
}
