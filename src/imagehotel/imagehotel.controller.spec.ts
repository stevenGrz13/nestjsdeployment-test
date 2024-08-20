import { Test, TestingModule } from '@nestjs/testing';
import { ImagehotelController } from './imagehotel.controller';

describe('ImagehotelController', () => {
  let controller: ImagehotelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagehotelController],
    }).compile();

    controller = module.get<ImagehotelController>(ImagehotelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
