import { Test, TestingModule } from '@nestjs/testing';
import { PecrRacaController } from './pecr-raca.controller';

describe('PecrRacaController', () => {
  let controller: PecrRacaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrRacaController],
    }).compile();

    controller = module.get<PecrRacaController>(PecrRacaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
