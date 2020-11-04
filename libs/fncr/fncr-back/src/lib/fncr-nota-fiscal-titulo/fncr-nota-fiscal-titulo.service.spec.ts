import { Test, TestingModule } from '@nestjs/testing';
import { FncrNotaFiscalTituloService } from './fncr-nota-fiscal-titulo.service';

describe('FncrNotaFiscalTituloService', () => {
  let service: FncrNotaFiscalTituloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrNotaFiscalTituloService],
    }).compile();

    service = module.get<FncrNotaFiscalTituloService>(FncrNotaFiscalTituloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
