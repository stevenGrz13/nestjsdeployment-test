import { Test, TestingModule } from '@nestjs/testing';
import { ParametrehotelController } from './parametrehotel.controller';

describe('ParametrehotelController', () => {
  let controller: ParametrehotelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParametrehotelController],
    }).compile();

    controller = module.get<ParametrehotelController>(ParametrehotelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
