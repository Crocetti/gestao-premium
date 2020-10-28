import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaJuridicaService } from './cmns-pessoa-juridica.service';

describe('CmnsPessoaJuridicaService', () => {
  let service: CmnsPessoaJuridicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsPessoaJuridicaService],
    }).compile();

    service = module.get<CmnsPessoaJuridicaService>(CmnsPessoaJuridicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
