import { Test, TestingModule } from '@nestjs/testing';
import { ParametrehotelService } from './parametrehotel.service';

describe('ParametrehotelService', () => {
  let service: ParametrehotelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParametrehotelService],
    }).compile();

    service = module.get<ParametrehotelService>(ParametrehotelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
