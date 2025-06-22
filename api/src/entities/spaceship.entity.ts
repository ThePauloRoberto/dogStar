import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'spaceships' })
export class SpaceshipEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column()
  manufacturer: string;

  @Column()
  passengerCapacity: string;
}
