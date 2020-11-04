import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroEmpresaService } from './sstm-parametro-empresa.service';

describe('SstmParametroEmpresaService', () => {
  let service: SstmParametroEmpresaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmParametroEmpresaService],
    }).compile();

    service = module.get<SstmParametroEmpresaService>(SstmParametroEmpresaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
