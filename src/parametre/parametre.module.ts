import { Module, forwardRef } from '@nestjs/common';
import { ParametreController } from './parametre.controller';
import { ParametreService } from './parametre.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parametre } from './parametre.entity';
import { ParametrehotelModule } from 'src/parametrehotel/parametrehotel.module';
import { HotelModule } from 'src/hotel/hotel.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Parametre]),
    forwardRef(() => ParametrehotelModule),
    HotelModule
  ],
  controllers: [ParametreController],
  providers: [ParametreService],
  exports: [ParametreService]
})
export class ParametreModule {}
