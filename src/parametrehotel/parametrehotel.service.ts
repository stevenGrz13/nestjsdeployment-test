import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParametreHotel } from './parametrehotel.entity';

@Injectable()
export class ParametrehotelService {
  constructor(
    @InjectRepository(ParametreHotel)
    private parametreHotelRepository: Repository<ParametreHotel>,
  ) {}

  async findAll(): Promise<ParametreHotel[]> {
    return this.parametreHotelRepository.find();
  }

  async findOne(id: number): Promise<ParametreHotel> {
    return this.parametreHotelRepository.findOne({ where: { id } });
  }

  async findByHotel(idhotel: number): Promise<ParametreHotel[]> {
    return this.parametreHotelRepository.find({ where: { idhotel } });
  }

  async findByHotelAndParametre(idhotel: number, idparametre: number): Promise<ParametreHotel[]> {
    return this.parametreHotelRepository.find({ where: { idhotel, idparametre } });
  }

  async create(user: Partial<ParametreHotel>): Promise<any> {
    const parametrehotel = await this.findByHotelAndParametre(user.idhotel,user.idparametre);
    if(parametrehotel.length == 0){
        const newuser = this.parametreHotelRepository.create(user);
        return this.parametreHotelRepository.save(newuser);
    }
    return { message : 'this parameter already exists in that hotel' }
  }

  async update(id: number, user: Partial<ParametreHotel>): Promise<ParametreHotel> {
    await this.parametreHotelRepository.update(id, user);
    return this.parametreHotelRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.parametreHotelRepository.delete(id);
  }
}