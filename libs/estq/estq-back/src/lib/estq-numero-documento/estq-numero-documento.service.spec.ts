import { Test, TestingModule } from '@nestjs/testing';
import { EstqNumeroDocumentoService } from './estq-numero-documento.service';

describe('EstqNumeroDocumentoService', () => {
  let service: EstqNumeroDocumentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqNumeroDocumentoService],
    }).compile();

    service = module.get<EstqNumeroDocumentoService>(EstqNumeroDocumentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
