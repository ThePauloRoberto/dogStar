import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetDTO } from './dto/planet.dto';

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

  @Get(':id')
  async getPlanetById(@Param('id', ParseIntPipe) planetId: number) {
    try {
      const planet = await this.planetsService.findById(planetId);

      if (!planet) {
        return {
          message: 'Planeta não encontrado!',
          data: undefined,
        };
      }

      return {
        message: 'Planeta encontrado!',
        data: planet,
      };
    } catch (error: unknown) {
      return {
        message: 'Erro interno ao encontrar planeta',
        error: error,
        data: undefined,
      };
    }
  }

  @Post()
  async createPlanet(@Body() planetDto: PlanetDTO) {
    try {
      const planet = await this.planetsService.create(planetDto);

      if (!planet) {
        return {
          message: 'Falha ao criar planeta!',
          data: undefined,
        };
      }

      return {
        message: 'Planeta criado com sucesso!',
        data: planet,
      };
    } catch (error: unknown) {
      return {
        message: 'erro interno ao criar planeta!',
        data: undefined,
        error: error,
      };
    }
  }

  @Put(':id')
  async updatePlanet(
    @Param('id', ParseIntPipe) planetId: number,
    @Body() planetDto: PlanetDTO,
  ) {
    try {
      const planet = await this.planetsService.findById(planetId);

      if (!planet) {
        return {
          message: 'Erro ao encontrar planeta com este ID',
          data: undefined,
        };
      }
      const planetUpdated = await this.planetsService.update(
        planetId,
        planetDto,
      );
      return {
        message: 'Planeta atualizado com sucesso!',
        data: planetUpdated,
      };
    } catch (erro: unknown) {
      return {
        message: 'Erro interno ao atualizar planeta!',
        data: undefined,
        erro: erro,
      };
    }
  }
}
