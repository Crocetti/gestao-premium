import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroCorporacaoService } from './sstm-parametro-corporacao.service';

describe('SstmParametroCorporacaoService', () => {
  let service: SstmParametroCorporacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmParametroCorporacaoService],
    }).compile();

    service = module.get<SstmParametroCorporacaoService>(SstmParametroCorporacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
