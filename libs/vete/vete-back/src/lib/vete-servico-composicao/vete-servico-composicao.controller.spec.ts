import { Test, TestingModule } from '@nestjs/testing';
import { VeteServicoComposicaoController } from './vete-servico-composicao.controller';

describe('VeteServicoComposicaoController', () => {
  let controller: VeteServicoComposicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeteServicoComposicaoController],
    }).compile();

    controller = module.get<VeteServicoComposicaoController>(VeteServicoComposicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
