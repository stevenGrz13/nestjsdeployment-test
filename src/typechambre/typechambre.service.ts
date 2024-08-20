import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeChambre } from './typechambre.entity';

@Injectable()
export class TypechambreService {
  constructor(
    @InjectRepository(TypeChambre)
    private typeChambreRepository: Repository<TypeChambre>,
  ) {}

  async findAll(): Promise<TypeChambre[]> {
    return this.typeChambreRepository.find();
  }

  async findOne(id: number): Promise<TypeChambre> {
    return this.typeChambreRepository.findOne({ where: { id } });
  }

  async create(typechambre: Partial<TypeChambre>): Promise<TypeChambre> {
    const newtypechambre = this.typeChambreRepository.create(typechambre);
    return this.typeChambreRepository.save(newtypechambre);
  }

  async update(id: number, typechambre: Partial<TypeChambre>): Promise<TypeChambre> {
    await this.typeChambreRepository.update(id, typechambre);
    return this.typeChambreRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.typeChambreRepository.delete(id);
  }
}
