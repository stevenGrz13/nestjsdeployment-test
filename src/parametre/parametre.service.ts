import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parametre } from './parametre.entity';

@Injectable()
export class ParametreService {
  constructor(
    @InjectRepository(Parametre)
    private parametreRepository: Repository<Parametre>,
  ) {}

  async findAll(): Promise<Parametre[]> {
    return this.parametreRepository.find();
  }

  async findOne(id: number): Promise<Parametre> {
    return this.parametreRepository.findOne({ where: { id } });
  }

  async create(user: Partial<Parametre>): Promise<Parametre> {
    const newuser = this.parametreRepository.create(user);
    return this.parametreRepository.save(newuser);
  }

  async update(id: number, user: Partial<Parametre>): Promise<Parametre> {
    await this.parametreRepository.update(id, user);
    return this.parametreRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.parametreRepository.delete(id);
  }
}
