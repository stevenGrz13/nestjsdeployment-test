import { Module } from '@nestjs/common';
import { AvisController } from './avis.controller';
import { AvisService } from './avis.service';
import { Avis } from './avis.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Avis])],
  controllers: [AvisController],
  providers: [AvisService]
})
export class AvisModule {}
