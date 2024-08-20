import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ExempleStyle } from './exemplestyle.entity';
import { ExemplestyleService } from './exemplestyle.service';

@Controller('exemplestyle')
export class ExemplestyleController {
  constructor(private readonly exempleStyleService: ExemplestyleService) {}

  //get all exemplestyle
  @Get()
  async findAll(): Promise<ExempleStyle[]> {
    return this.exempleStyleService.findAll();
  }

  //get exemplestyle by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ExempleStyle> {
    const exemplestyle = await this.exempleStyleService.findOne(id);
    if (!exemplestyle) {
      throw new NotFoundException('exemplestyle does not exist!');
    } else {
      return exemplestyle;
    }
  }

  //create exemplestyle
  @Post()
  async create(@Body() exemplestyle: ExempleStyle): Promise<ExempleStyle> {
    return this.exempleStyleService.create(exemplestyle);
  }

  //update exemplestyle
  @Put(':id')
  async update (@Param('id') id: number, @Body() exemplestyle: ExempleStyle): Promise<any> {
    return this.exempleStyleService.update(id, exemplestyle);
  }

  //delete exemplestyle
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if exemplestyle does not exist
    const exemplestyle = await this.exempleStyleService.findOne(id);
    if (!exemplestyle) {
      throw new NotFoundException('exemplestyle does not exist!');
    }
    return this.exempleStyleService.delete(id);
  }
}