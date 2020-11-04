import { Test, TestingModule } from '@nestjs/testing';
import { FncrBancoContaService } from './fncr-banco-conta.service';

describe('FncrBancoContaService', () => {
  let service: FncrBancoContaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrBancoContaService],
    }).compile();

    service = module.get<FncrBancoContaService>(FncrBancoContaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
