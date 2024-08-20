import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { Parametre } from './parametre.entity';
import { ParametreService } from './parametre.service';
import { ParametreHotel } from 'src/parametrehotel/parametrehotel.entity';
import { HotelService } from 'src/hotel/hotel.service';
import { ParametrehotelService } from 'src/parametrehotel/parametrehotel.service';

@Controller('parametre')
export class ParametreController {
  constructor(
    private readonly parametreService: ParametreService,
    private readonly hotelService: HotelService,
    private readonly parametreHotelService: ParametrehotelService
) {}

  //get all Parametres
  @Get()
  async findAll(): Promise<Parametre[]> {
    return this.parametreService.findAll();
  }

  //get Parametre by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Parametre> {
    const user = await this.parametreService.findOne(id);
    if (!user) {
      throw new NotFoundException('Parametre does not exist!');
    } else {
      return user;
    }
  }

  //create Parametre
  @Post()
  async create(@Body() user: Parametre): Promise<Parametre> {
    const parametre = await this.parametreService.create(user);
    
    const listehotel = await this.hotelService.findAll();

    for(let i=0; i<listehotel.length; i++){
        const parametrehotel = new ParametreHotel();
        parametrehotel.idhotel = listehotel[i].id;
        parametrehotel.etat = false;
        parametrehotel.idparametre = parametre.id;

        await this.parametreHotelService.create(parametrehotel);
    }

    return parametre;
  }

  //update Parametre
  @Put(':id')
  async update (@Param('id') id: number, @Body() user: Parametre): Promise<any> {
    return this.parametreService.update(id, user);
  }

  //delete Parametre
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if Parametre does not exist
    const user = await this.parametreService.findOne(id);
    if (!user) {
      throw new NotFoundException('Parametre does not exist!');
    }
    return this.parametreService.delete(id);
  }
}