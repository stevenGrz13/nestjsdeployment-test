import { Module } from '@nestjs/common';
import { TypechambreController } from './typechambre.controller';
import { TypechambreService } from './typechambre.service';
import { TypeChambre } from './typechambre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypeChambre])],
  controllers: [TypechambreController],
  providers: [TypechambreService]
})
export class TypechambreModule {}
