import { Test, TestingModule } from '@nestjs/testing';
import { CmnsProfissaoService } from './cmns-profissao.service';

describe('CmnsProfissaoService', () => {
  let service: CmnsProfissaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsProfissaoService],
    }).compile();

    service = module.get<CmnsProfissaoService>(CmnsProfissaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
