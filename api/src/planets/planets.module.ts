import { Module } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetsController } from './planets.controller';
import { PlanetsRepository } from './planets.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanetEntity } from 'src/entities/planet.entity';

@Module({
  providers: [PlanetsService, PlanetsRepository],
  controllers: [PlanetsController],
  exports: [PlanetsService, PlanetsRepository],
  imports: [TypeOrmModule.forFeature([PlanetEntity])],
})
export class PlanetsModule {}
