import { Test, TestingModule } from '@nestjs/testing';
import { FncrPlanoContaService } from './fncr-plano-conta.service';

describe('FncrPlanoContaService', () => {
  let service: FncrPlanoContaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrPlanoContaService],
    }).compile();

    service = module.get<FncrPlanoContaService>(FncrPlanoContaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
