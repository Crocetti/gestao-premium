import { Test, TestingModule } from '@nestjs/testing';
import { FncrCaixaMovimentoController } from './fncr-caixa-movimento.controller';

describe('FncrCaixaMovimentoController', () => {
  let controller: FncrCaixaMovimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrCaixaMovimentoController],
    }).compile();

    controller = module.get<FncrCaixaMovimentoController>(FncrCaixaMovimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
