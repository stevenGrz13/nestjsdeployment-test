import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avis } from './avis.entity';

@Injectable()
export class AvisService {
  constructor(
    @InjectRepository(Avis)
    private avisRepository: Repository<Avis>,
  ) {}

  async findAll(): Promise<Avis[]> {
    return this.avisRepository.find();
  }

  async findOne(id: number): Promise<Avis> {
    return this.avisRepository.findOne({ where: { id } });
  }

  async findNombreAvis(idhotel: number): Promise<number> {
    const liste = await this.avisRepository.find({ where: { idhotel } });
    return liste.length;
  }

  async create(avis: Partial<Avis>): Promise<Avis> {
    avis.date = new Date();
    const newavis = this.avisRepository.create(avis);
    return this.avisRepository.save(newavis);
  }

  async update(id: number, avis: Partial<Avis>): Promise<Avis> {
    await this.avisRepository.update(id, avis);
    return this.avisRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.avisRepository.delete(id);
  }
}