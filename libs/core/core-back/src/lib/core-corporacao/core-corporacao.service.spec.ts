import { Test, TestingModule } from '@nestjs/testing';
import { CoreCorporacaoService } from './core-corporacao.service';

describe('CoreCorporacaoService', () => {
  let service: CoreCorporacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreCorporacaoService],
    }).compile();

    service = module.get<CoreCorporacaoService>(CoreCorporacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
