import { Test, TestingModule } from '@nestjs/testing';
import { FncrFormaVencimentoService } from './fncr-forma-vencimento.service';

describe('FncrFormaVencimentoService', () => {
  let service: FncrFormaVencimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrFormaVencimentoService],
    }).compile();

    service = module.get<FncrFormaVencimentoService>(FncrFormaVencimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
