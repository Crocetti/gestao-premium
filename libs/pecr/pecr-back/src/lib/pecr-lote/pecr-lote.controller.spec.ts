import { Test, TestingModule } from '@nestjs/testing';
import { PecrLoteController } from './pecr-lote.controller';

describe('PecrLoteController', () => {
  let controller: PecrLoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrLoteController],
    }).compile();

    controller = module.get<PecrLoteController>(PecrLoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
