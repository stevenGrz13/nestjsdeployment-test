import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { TypeChambre } from './typechambre.entity';
import { TypechambreService } from './typechambre.service';

@Controller('typechambre')
export class TypechambreController {
  constructor(private readonly typeChambreService: TypechambreService) {}

  //get all TypeChambre
  @Get()
  async findAll(): Promise<TypeChambre[]> {
    return this.typeChambreService.findAll();
  }

  //get TypeChambre by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<TypeChambre> {
    const typechambre = await this.typeChambreService.findOne(id);
    if (!typechambre) {
      throw new NotFoundException('TypeChambre does not exist!');
    } else {
      return typechambre;
    }
  }

  //create TypeChambre
  @Post()
  async create(@Body() typechambre: TypeChambre): Promise<TypeChambre> {
    return this.typeChambreService.create(typechambre);
  }

  //update TypeChambre
  @Put(':id')
  async update (@Param('id') id: number, @Body() typechambre: TypeChambre): Promise<any> {
    return this.typeChambreService.update(id, typechambre);
  }

  //delete TypeChambre
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if TypeChambre does not exist
    const typechambre = await this.typeChambreService.findOne(id);
    if (!typechambre) {
      throw new NotFoundException('TypeChambre does not exist!');
    }
    return this.typeChambreService.delete(id);
  }
}