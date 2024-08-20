import { Module, forwardRef } from '@nestjs/common';
import { ParametrehotelController } from './parametrehotel.controller';
import { ParametrehotelService } from './parametrehotel.service';
import { ParametreHotel } from './parametrehotel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelModule } from 'src/hotel/hotel.module';
import { ParametreModule } from 'src/parametre/parametre.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParametreHotel]),
    HotelModule,
    forwardRef(() => ParametreModule)
  ],
  controllers: [ParametrehotelController],
  providers: [ParametrehotelService],
  exports: [ParametrehotelService]
})
export class ParametrehotelModule {}
