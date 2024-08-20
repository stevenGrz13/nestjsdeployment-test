import { Test, TestingModule } from '@nestjs/testing';
import { ExemplestyleService } from './exemplestyle.service';

describe('ExemplestyleService', () => {
  let service: ExemplestyleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExemplestyleService],
    }).compile();

    service = module.get<ExemplestyleService>(ExemplestyleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
