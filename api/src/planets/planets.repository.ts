import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanetEntity } from 'src/entities/planet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlanetsRepository {
  constructor(
    @InjectRepository(PlanetEntity)
    private readonly planetRepository: Repository<PlanetEntity>,
  ) {}

  async findAll(): Promise<PlanetEntity[]> {
    const planets = await this.planetRepository.find();

    return planets;
  }
}
