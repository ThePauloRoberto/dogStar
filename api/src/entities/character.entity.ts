import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlanetEntity } from './planet.entity';

@Entity({ name: 'characters' })
export class CharacterEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  race: string;
  @Column()
  affiliation: string;

  @ManyToOne(() => PlanetEntity, (planet) => planet.characters)
  homeworld: string;
}
