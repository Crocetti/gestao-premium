import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroEmpresaController } from './sstm-parametro-empresa.controller';

describe('SstmParametroEmpresaController', () => {
  let controller: SstmParametroEmpresaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmParametroEmpresaController],
    }).compile();

    controller = module.get<SstmParametroEmpresaController>(SstmParametroEmpresaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
