import { Injectable } from '@nestjs/common';
import { PlanetsRepository } from './planets.repository';

@Injectable()
export class PlanetsService {
  constructor(private readonly planetsRepository: PlanetsRepository) {}

  async findAll() {
    return await this.planetsRepository.findAll();
  }

  async findById(id: number) {
    return await this.planetsRepository.findById(id);
  }
}
