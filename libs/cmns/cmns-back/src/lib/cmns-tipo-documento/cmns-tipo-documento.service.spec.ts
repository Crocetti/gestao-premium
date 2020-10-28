import { Test, TestingModule } from '@nestjs/testing';
import { CmnsTipoDocumentoService } from './cmns-tipo-documento.service';

describe('CmnsTipoDocumentoService', () => {
  let service: CmnsTipoDocumentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsTipoDocumentoService],
    }).compile();

    service = module.get<CmnsTipoDocumentoService>(CmnsTipoDocumentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
