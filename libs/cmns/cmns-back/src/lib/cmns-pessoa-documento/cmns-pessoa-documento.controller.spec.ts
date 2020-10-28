import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaDocumentoController } from './cmns-pessoa-documento.controller';

describe('CmnsPessoaDocumentoController', () => {
  let controller: CmnsPessoaDocumentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsPessoaDocumentoController],
    }).compile();

    controller = module.get<CmnsPessoaDocumentoController>(CmnsPessoaDocumentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
