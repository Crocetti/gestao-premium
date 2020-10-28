import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaTelefoneService } from './cmns-pessoa-telefone.service';

describe('CmnsPessoaTelefoneService', () => {
  let service: CmnsPessoaTelefoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsPessoaTelefoneService],
    }).compile();

    service = module.get<CmnsPessoaTelefoneService>(CmnsPessoaTelefoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
