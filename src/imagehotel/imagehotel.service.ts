import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageHotel } from './imagehotel.entity';

@Injectable()
export class ImagehotelService {
  constructor(
    @InjectRepository(ImageHotel)
    private userRepository: Repository<ImageHotel>,
  ) {}

  async findAll(): Promise<ImageHotel[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<ImageHotel> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: Partial<ImageHotel>): Promise<ImageHotel> {
    const newuser = this.userRepository.create(user);
    return this.userRepository.save(newuser);
  }

  async update(id: number, user: Partial<ImageHotel>): Promise<ImageHotel> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
