import { Test, TestingModule } from '@nestjs/testing';
import { PecrHistoricoCoberturaController } from './pecr-historico-cobertura.controller';

describe('PecrHistoricoCoberturaController', () => {
  let controller: PecrHistoricoCoberturaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrHistoricoCoberturaController],
    }).compile();

    controller = module.get<PecrHistoricoCoberturaController>(PecrHistoricoCoberturaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
