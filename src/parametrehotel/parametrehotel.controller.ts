import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ParametreHotel } from './parametrehotel.entity';
import { ParametrehotelService } from './parametrehotel.service';
import { ParametreService } from 'src/parametre/parametre.service';

@Controller('parametrehotel')
export class ParametrehotelController {
  constructor(
    private readonly parametreHotelService: ParametrehotelService,
    private readonly parametreService: ParametreService
  ) {}

  //get all ParametreHotel
  @Get()
  async findAll(): Promise<ParametreHotel[]> {
    return this.parametreHotelService.findAll();
  }

  //get ParametreHotel by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ParametreHotel> {
    const parametrehotel = await this.parametreHotelService.findOne(id);
    if (!parametrehotel) {
      throw new NotFoundException('ParametreHotel does not exist!');
    } else {
      return parametrehotel;
    }
  }

  @Post('findByHotel')
  async findByHotel(@Body('idhotel') idhotel: number): Promise<any[]> {
    let liste = await this.parametreHotelService.findByHotel(idhotel);
    for(let i=0; i<liste.length; i++){
      const nom = await this.parametreService.findOne(liste[i].idparametre);
      liste[i].nomparametre = nom.nom;
    }
    return liste;
  }

  //create ParametreHotel
  @Post()
  async create(@Body() parametrehotel: ParametreHotel): Promise<ParametreHotel> {
    return this.parametreHotelService.create(parametrehotel);
  }

  //update ParametreHotel
  @Put(':id')
  async update (@Param('id') id: number, @Body() parametrehotel: ParametreHotel): Promise<any> {
    return this.parametreHotelService.update(id, parametrehotel);
  }

  //delete ParametreHotel
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if ParametreHotel does not exist
    const user = await this.parametreHotelService.findOne(id);
    if (!user) {
      throw new NotFoundException('ParametreHotel does not exist!');
    }
    return this.parametreHotelService.delete(id);
  }
}