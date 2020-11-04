import { Test, TestingModule } from '@nestjs/testing';
import { PecrHistoricoPesagemController } from './pecr-historico-pesagem.controller';

describe('PecrHistoricoPesagemController', () => {
  let controller: PecrHistoricoPesagemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrHistoricoPesagemController],
    }).compile();

    controller = module.get<PecrHistoricoPesagemController>(PecrHistoricoPesagemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
