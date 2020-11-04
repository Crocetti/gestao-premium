import { Test, TestingModule } from '@nestjs/testing';
import { SstmSistemaVersaoService } from './sstm-sistema-versao.service';

describe('SstmSistemaVersaoService', () => {
  let service: SstmSistemaVersaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmSistemaVersaoService],
    }).compile();

    service = module.get<SstmSistemaVersaoService>(SstmSistemaVersaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
