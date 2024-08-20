import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ImageHotel } from './imagehotel.entity';
import { ImagehotelService } from './imagehotel.service';

@Controller('imagehotel')
export class ImagehotelController {
  constructor(private readonly imageHotelService: ImagehotelService) {}

  //get all ImageHotels
  @Get()
  async findAll(): Promise<ImageHotel[]> {
    return this.imageHotelService.findAll();
  }

  //get ImageHotel by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ImageHotel> {
    const user = await this.imageHotelService.findOne(id);
    if (!user) {
      throw new NotFoundException('ImageHotel does not exist!');
    } else {
      return user;
    }
  }

  //create ImageHotel
  @Post()
  async create(@Body() user: ImageHotel): Promise<ImageHotel> {
    return this.imageHotelService.create(user);
  }

  //update ImageHotel
  @Put(':id')
  async update (@Param('id') id: number, @Body() user: ImageHotel): Promise<any> {
    return this.imageHotelService.update(id, user);
  }

  //delete ImageHotel
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if ImageHotel does not exist
    const user = await this.imageHotelService.findOne(id);
    if (!user) {
      throw new NotFoundException('ImageHotel does not exist!');
    }
    return this.imageHotelService.delete(id);
  }
}