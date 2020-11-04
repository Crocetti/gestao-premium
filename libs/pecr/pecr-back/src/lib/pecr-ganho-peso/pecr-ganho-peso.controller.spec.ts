import { Test, TestingModule } from '@nestjs/testing';
import { PecrGanhoPesoController } from './pecr-ganho-peso.controller';

describe('PecrGanhoPesoController', () => {
  let controller: PecrGanhoPesoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrGanhoPesoController],
    }).compile();

    controller = module.get<PecrGanhoPesoController>(PecrGanhoPesoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
