import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaEmailService } from './cmns-pessoa-email.service';

describe('CmnsPessoaEmailService', () => {
  let service: CmnsPessoaEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsPessoaEmailService],
    }).compile();

    service = module.get<CmnsPessoaEmailService>(CmnsPessoaEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
