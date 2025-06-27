import { Controller, Get } from '@nestjs/common';
import { PlanetsService } from './planets.service';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  async getAllPlanets() {
    try {
      const planets = await this.planetsService.findAll();

      if (!planets) {
        return {
          message: 'Não existe nenhum planeta no banco de dados!',
          data: planets,
        };
      }

      return {
        message: 'Todos os planetas encontrados!',
        data: planets,
      };
    } catch (error: unknown) {
      return {
        message: 'Erro interno ao encontrar todos os planetas!',
        data: error,
      };
    }
  }
}
