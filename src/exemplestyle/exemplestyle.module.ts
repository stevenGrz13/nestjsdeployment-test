import { Module } from '@nestjs/common';
import { ExemplestyleController } from './exemplestyle.controller';
import { ExemplestyleService } from './exemplestyle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExempleStyle } from './exemplestyle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExempleStyle])],
  controllers: [ExemplestyleController],
  providers: [ExemplestyleService]
})
export class ExemplestyleModule {}
