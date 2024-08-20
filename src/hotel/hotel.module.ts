import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel])],
  controllers: [HotelController],
  providers: [HotelService],
  exports: [HotelService]
})
export class HotelModule {}
