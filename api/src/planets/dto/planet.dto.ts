import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PlanetDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsString()
  climate: string;
  @IsNotEmpty()
  @IsString()
  terrain: string;
  @IsNotEmpty()
  @IsNumber()
  population: number;
  @IsNotEmpty()
  @IsNumber()
  starSystem: number;
}
