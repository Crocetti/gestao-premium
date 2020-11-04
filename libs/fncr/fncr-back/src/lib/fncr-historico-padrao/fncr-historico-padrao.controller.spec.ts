import { Test, TestingModule } from '@nestjs/testing';
import { FncrHistoricoPadraoController } from './fncr-historico-padrao.controller';

describe('FncrHistoricoPadraoController', () => {
  let controller: FncrHistoricoPadraoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrHistoricoPadraoController],
    }).compile();

    controller = module.get<FncrHistoricoPadraoController>(FncrHistoricoPadraoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
