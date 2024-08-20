import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.entity';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  //get all hotel
  @Get()
  async findAll(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }

  //get hotel by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Hotel> {
    const hotel = await this.hotelService.findOne(id);
    if (!hotel) {
      throw new NotFoundException('Hotel does not exist!');
    } else {
      return hotel;
    }
  }

  //create hotel
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async create(@Body() hotel: Hotel, @UploadedFiles() files): Promise<Hotel> {

    const file1 = files[0];
    const originalFilename1 = file1.originalname;
    const extension1 = path.extname(originalFilename1);
    const nomimage1 = hotel.nom + extension1;

    hotel.imageacceuil = 'http://localhost:3000/uploads/' + nomimage1;

    const filePath = path.join(__dirname, '..', '..', 'uploads', nomimage1);
    fs.writeFileSync(filePath, file1.buffer);

    return this.hotelService.create(hotel);
  }

  //update hotel
  @Put(':id')
  async update (@Param('id') id: number, @Body() hotel: Hotel): Promise<any> {
    return this.hotelService.update(id, hotel);
  }

  //delete hotel
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if hotel does not exist
    const user = await this.hotelService.findOne(id);
    if (!user) {
      throw new NotFoundException('Hotel does not exist!');
    }
    return this.hotelService.delete(id);
  }
}