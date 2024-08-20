import { Test, TestingModule } from '@nestjs/testing';
import { ImagehotelService } from './imagehotel.service';

describe('ImagehotelService', () => {
  let service: ImagehotelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagehotelService],
    }).compile();

    service = module.get<ImagehotelService>(ImagehotelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
