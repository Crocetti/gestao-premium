import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaEnderecoService } from './cmns-pessoa-endereco.service';

describe('CmnsPessoaEnderecoService', () => {
  let service: CmnsPessoaEnderecoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsPessoaEnderecoService],
    }).compile();

    service = module.get<CmnsPessoaEnderecoService>(CmnsPessoaEnderecoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
