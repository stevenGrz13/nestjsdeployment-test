import { Test, TestingModule } from '@nestjs/testing';
import { TypechambreService } from './typechambre.service';

describe('TypechambreService', () => {
  let service: TypechambreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypechambreService],
    }).compile();

    service = module.get<TypechambreService>(TypechambreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
