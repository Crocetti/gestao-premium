import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroSistemaService } from './sstm-parametro-sistema.service';

describe('SstmParametroSistemaService', () => {
  let service: SstmParametroSistemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmParametroSistemaService],
    }).compile();

    service = module.get<SstmParametroSistemaService>(SstmParametroSistemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
