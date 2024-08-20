import { Module } from '@nestjs/common';
import { ImagehotelController } from './imagehotel.controller';
import { ImagehotelService } from './imagehotel.service';
import { ImageHotel } from './imagehotel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ImageHotel])],
  controllers: [ImagehotelController],
  providers: [ImagehotelService]
})
export class ImagehotelModule {}
