import { Test, TestingModule } from '@nestjs/testing';
import { RchmFuncionarioHistoricoController } from './rchm-funcionario-historico.controller';

describe('RchmFuncionarioHistoricoController', () => {
  let controller: RchmFuncionarioHistoricoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RchmFuncionarioHistoricoController],
    }).compile();

    controller = module.get<RchmFuncionarioHistoricoController>(RchmFuncionarioHistoricoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
