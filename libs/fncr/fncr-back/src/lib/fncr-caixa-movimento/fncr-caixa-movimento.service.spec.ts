import { Test, TestingModule } from '@nestjs/testing';
import { FncrCaixaMovimentoService } from './fncr-caixa-movimento.service';

describe('FncrCaixaMovimentoService', () => {
  let service: FncrCaixaMovimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrCaixaMovimentoService],
    }).compile();

    service = module.get<FncrCaixaMovimentoService>(FncrCaixaMovimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
