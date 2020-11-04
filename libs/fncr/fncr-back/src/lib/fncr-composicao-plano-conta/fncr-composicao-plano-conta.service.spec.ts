import { Test, TestingModule } from '@nestjs/testing';
import { FncrComposicaoPlanoContaService } from './fncr-composicao-plano-conta.service';

describe('FncrComposicaoPlanoContaService', () => {
  let service: FncrComposicaoPlanoContaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrComposicaoPlanoContaService],
    }).compile();

    service = module.get<FncrComposicaoPlanoContaService>(FncrComposicaoPlanoContaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
