import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlanetEntity } from './planet.entity';

@Entity({ name: 'starSystems' })
export class StarSystemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => PlanetEntity, (planets) => planets.startSystem)
  listPlanets: PlanetEntity[];
}
