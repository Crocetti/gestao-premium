import { Test, TestingModule } from '@nestjs/testing';
import { CoreUnidadeEmpresarialController } from './core-unidade-empresarial.controller';

describe('CoreUnidadeEmpresarialController', () => {
  let controller: CoreUnidadeEmpresarialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoreUnidadeEmpresarialController],
    }).compile();

    controller = module.get<CoreUnidadeEmpresarialController>(CoreUnidadeEmpresarialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
