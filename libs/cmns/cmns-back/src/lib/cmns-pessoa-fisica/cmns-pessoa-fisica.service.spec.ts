import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaFisicaService } from './cmns-pessoa-fisica.service';

describe('CmnsPessoaFisicaService', () => {
  let service: CmnsPessoaFisicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsPessoaFisicaService],
    }).compile();

    service = module.get<CmnsPessoaFisicaService>(CmnsPessoaFisicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
