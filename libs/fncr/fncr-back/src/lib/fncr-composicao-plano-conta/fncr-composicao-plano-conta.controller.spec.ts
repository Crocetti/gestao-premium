import { Test, TestingModule } from '@nestjs/testing';
import { FncrComposicaoPlanoContaController } from './fncr-composicao-plano-conta.controller';

describe('FncrComposicaoPlanoContaController', () => {
  let controller: FncrComposicaoPlanoContaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrComposicaoPlanoContaController],
    }).compile();

    controller = module.get<FncrComposicaoPlanoContaController>(FncrComposicaoPlanoContaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
