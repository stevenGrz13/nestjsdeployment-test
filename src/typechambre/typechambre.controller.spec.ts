import { Test, TestingModule } from '@nestjs/testing';
import { TypechambreController } from './typechambre.controller';

describe('TypechambreController', () => {
  let controller: TypechambreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypechambreController],
    }).compile();

    controller = module.get<TypechambreController>(TypechambreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
