import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExempleStyle } from './exemplestyle.entity';

@Injectable()
export class ExemplestyleService {
  constructor(
    @InjectRepository(ExempleStyle)
    private exempleStyleRepository: Repository<ExempleStyle>,
  ) {}

  async findAll(): Promise<ExempleStyle[]> {
    return this.exempleStyleRepository.find();
  }

  async findOne(id: number): Promise<ExempleStyle> {
    return this.exempleStyleRepository.findOne({ where: { id } });
  }

  async create(exemplestyle: Partial<ExempleStyle>): Promise<ExempleStyle> {
    const newexemplestyle = this.exempleStyleRepository.create(exemplestyle);
    return this.exempleStyleRepository.save(newexemplestyle);
  }

  async update(id: number, exemplestyle: Partial<ExempleStyle>): Promise<ExempleStyle> {
    await this.exempleStyleRepository.update(id, exemplestyle);
    return this.exempleStyleRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.exempleStyleRepository.delete(id);
  }
}