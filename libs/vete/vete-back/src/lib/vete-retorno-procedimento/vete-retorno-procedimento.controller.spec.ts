import { Test, TestingModule } from '@nestjs/testing';
import { VeteRetornoProcedimentoController } from './vete-retorno-procedimento.controller';

describe('VeteRetornoProcedimentoController', () => {
  let controller: VeteRetornoProcedimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeteRetornoProcedimentoController],
    }).compile();

    controller = module.get<VeteRetornoProcedimentoController>(VeteRetornoProcedimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
