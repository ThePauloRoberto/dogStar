import { Injectable } from '@nestjs/common';
import { PlanetsRepository } from './planets.repository';
import { PlanetDTO } from './dto/planet.dto';
@Injectable()
export class PlanetsService {
  constructor(private readonly planetsRepository: PlanetsRepository) {}

  async findAll() {
    return await this.planetsRepository.findAll();
  }

  async findById(id: number) {
    return await this.planetsRepository.findById(id);
  }

  async create(planet: PlanetDTO) {
    return await this.planetsRepository.create(planet);
  }

  async update(planetId: number, planetDto: PlanetDTO) {
    return await this.planetsRepository.updatePlanet(planetId, planetDto);
  }
}
