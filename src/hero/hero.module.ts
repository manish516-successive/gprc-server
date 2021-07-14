import { Module } from '@nestjs/common';
import { HeroesController } from './hero.controller';

@Module({
  imports: [
  ],
  controllers: [HeroesController],
})
export class HeroModule {}