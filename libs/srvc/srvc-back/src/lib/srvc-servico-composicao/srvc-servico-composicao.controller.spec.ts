import { Test, TestingModule } from '@nestjs/testing';
import { SrvcServicoComposicaoController } from './srvc-servico-composicao.controller';

describe('SrvcServicoComposicaoController', () => {
  let controller: SrvcServicoComposicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SrvcServicoComposicaoController],
    }).compile();

    controller = module.get<SrvcServicoComposicaoController>(SrvcServicoComposicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
