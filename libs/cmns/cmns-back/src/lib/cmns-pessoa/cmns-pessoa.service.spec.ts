import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaService } from './cmns-pessoa.service';

describe('CmnsPessoaService', () => {
  let service: CmnsPessoaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsPessoaService],
    }).compile();

    service = module.get<CmnsPessoaService>(CmnsPessoaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
