import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaImagemService } from './cmns-pessoa-imagem.service';

describe('CmnsPessoaImagemService', () => {
  let service: CmnsPessoaImagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsPessoaImagemService],
    }).compile();

    service = module.get<CmnsPessoaImagemService>(CmnsPessoaImagemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
