import { Test, TestingModule } from '@nestjs/testing';
import { FncrNivelPlanoContaService } from './fncr-nivel-plano-conta.service';

describe('FncrNivelPlanoContaService', () => {
  let service: FncrNivelPlanoContaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrNivelPlanoContaService],
    }).compile();

    service = module.get<FncrNivelPlanoContaService>(FncrNivelPlanoContaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
