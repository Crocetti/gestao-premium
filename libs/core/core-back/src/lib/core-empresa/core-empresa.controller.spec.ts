import { Test, TestingModule } from '@nestjs/testing';
import { CoreEmpresaController } from './core-empresa.controller';

describe('CoreEmpresaController', () => {
  let controller: CoreEmpresaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoreEmpresaController],
    }).compile();

    controller = module.get<CoreEmpresaController>(CoreEmpresaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
