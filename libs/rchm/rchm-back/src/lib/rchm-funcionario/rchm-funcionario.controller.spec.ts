import { Test, TestingModule } from '@nestjs/testing';
import { RchmFuncionarioController } from './rchm-funcionario.controller';

describe('RchmFuncionarioController', () => {
  let controller: RchmFuncionarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RchmFuncionarioController],
    }).compile();

    controller = module.get<RchmFuncionarioController>(RchmFuncionarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
