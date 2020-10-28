import { Test, TestingModule } from '@nestjs/testing';
import { CmnsTipoDocumentoController } from './cmns-tipo-documento.controller';

describe('CmnsTipoDocumentoController', () => {
  let controller: CmnsTipoDocumentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsTipoDocumentoController],
    }).compile();

    controller = module.get<CmnsTipoDocumentoController>(CmnsTipoDocumentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
