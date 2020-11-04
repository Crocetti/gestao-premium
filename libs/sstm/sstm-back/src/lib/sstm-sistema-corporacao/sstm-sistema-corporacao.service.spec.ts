import { Test, TestingModule } from '@nestjs/testing';
import { SstmSistemaCorporacaoService } from './sstm-sistema-corporacao.service';

describe('SstmSistemaCorporacaoService', () => {
  let service: SstmSistemaCorporacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmSistemaCorporacaoService],
    }).compile();

    service = module.get<SstmSistemaCorporacaoService>(SstmSistemaCorporacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
