import { Test, TestingModule } from '@nestjs/testing';
import { PecrHistoricoCategoriaController } from './pecr-historico-categoria.controller';

describe('PecrHistoricoCategoriaController', () => {
  let controller: PecrHistoricoCategoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrHistoricoCategoriaController],
    }).compile();

    controller = module.get<PecrHistoricoCategoriaController>(PecrHistoricoCategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
