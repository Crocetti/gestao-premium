import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaDocumentoService } from './cmns-pessoa-documento.service';

describe('CmnsPessoaDocumentoService', () => {
  let service: CmnsPessoaDocumentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsPessoaDocumentoService],
    }).compile();

    service = module.get<CmnsPessoaDocumentoService>(CmnsPessoaDocumentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
