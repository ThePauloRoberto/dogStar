import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanetEntity } from 'src/entities/planet.entity';
import { Repository } from 'typeorm';
import { PlanetDTO } from './dto/planet.dto';

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

  async findById(id: number) {
    const planet = await this.planetRepository.findBy({ id });

    return planet[0];
  }

  async create(planetDto: PlanetDTO) {
    const planetCreated = this.planetRepository.create(planetDto);

    const planetSaved = await this.planetRepository.save(planetCreated);

    return planetSaved;
  }

  async updatePlanet(planetId: number, planetDto: PlanetDTO) {
    const planetUpdated = await this.planetRepository.preload({
      id: planetId,
      ...planetDto,
    });

    if (!planetUpdated) {
      return {
        message: 'Planeta não encontrado!',
        data: undefined,
      };
    }

    await this.planetRepository.save(planetUpdated);

    return planetUpdated;
  }
}
