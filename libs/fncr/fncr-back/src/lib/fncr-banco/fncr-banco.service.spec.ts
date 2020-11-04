import { Test, TestingModule } from '@nestjs/testing';
import { FncrBancoService } from './fncr-banco.service';

describe('FncrBancoService', () => {
  let service: FncrBancoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrBancoService],
    }).compile();

    service = module.get<FncrBancoService>(FncrBancoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
