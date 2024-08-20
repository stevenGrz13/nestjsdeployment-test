import { Test, TestingModule } from '@nestjs/testing';
import { ExemplestyleController } from './exemplestyle.controller';

describe('ExemplestyleController', () => {
  let controller: ExemplestyleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExemplestyleController],
    }).compile();

    controller = module.get<ExemplestyleController>(ExemplestyleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
