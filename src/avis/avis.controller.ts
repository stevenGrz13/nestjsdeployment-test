import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { AvisService } from './avis.service';
import { Avis } from './avis.entity';

@Controller('avis')
export class AvisController {
  constructor(private readonly avisService: AvisService) {}

  //get all avis
  @Get()
  async findAll(): Promise<Avis[]> {
    return this.avisService.findAll();
  }

  //get avis by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Avis> {
    const avis = await this.avisService.findOne(id);
    if (!avis) {
      throw new NotFoundException('Avis does not exist!');
    } else {
      return avis;
    }
  }

  @Post('NumberAvisByHotel')
  async NumberByHotel(@Body('idhotel') idhotel: number): Promise<number> {
    return this.avisService.findNombreAvis(idhotel);
  }

  //create avis
  @Post()
  async create(@Body() avis: Avis): Promise<Avis> {
    return this.avisService.create(avis);
  }

  //update avis
  @Put(':id')
  async update (@Param('id') id: number, @Body() avis: Avis): Promise<any> {
    return this.avisService.update(id, avis);
  }

  //delete avis
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if avis does not exist
    const avis = await this.avisService.findOne(id);
    if (!avis) {
      throw new NotFoundException('Avis does not exist!');
    }
    return this.avisService.delete(id);
  }
}