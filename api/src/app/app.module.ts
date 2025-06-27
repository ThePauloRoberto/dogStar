import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CharacterEntity } from 'src/entities/character.entity';
import { PlanetEntity } from 'src/entities/planet.entity';
import { SpaceshipEntity } from 'src/entities/spaceship.entity';
import { StarSystemEntity } from 'src/entities/star-system.entity';
import { PlanetsModule } from 'src/planets/planets.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([
      CharacterEntity,
      PlanetEntity,
      SpaceshipEntity,
      StarSystemEntity,
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: false,
    }),
    PlanetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
