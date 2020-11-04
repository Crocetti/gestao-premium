import { Test, TestingModule } from '@nestjs/testing';
import { FncrBancoContaSaldoService } from './fncr-banco-conta-saldo.service';

describe('FncrBancoContaSaldoService', () => {
  let service: FncrBancoContaSaldoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrBancoContaSaldoService],
    }).compile();

    service = module.get<FncrBancoContaSaldoService>(FncrBancoContaSaldoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
