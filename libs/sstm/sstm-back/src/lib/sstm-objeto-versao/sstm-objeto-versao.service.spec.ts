import { Test, TestingModule } from '@nestjs/testing';
import { SstmObjetoVersaoService } from './sstm-objeto-versao.service';

describe('SstmObjetoVersaoService', () => {
  let service: SstmObjetoVersaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmObjetoVersaoService],
    }).compile();

    service = module.get<SstmObjetoVersaoService>(SstmObjetoVersaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
