import { Test, TestingModule } from '@nestjs/testing';
import { CdstUnidadeMedidaController } from './cdst-unidade-medida.controller';

describe('CdstUnidadeMedidaController', () => {
  let controller: CdstUnidadeMedidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstUnidadeMedidaController],
    }).compile();

    controller = module.get<CdstUnidadeMedidaController>(CdstUnidadeMedidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
