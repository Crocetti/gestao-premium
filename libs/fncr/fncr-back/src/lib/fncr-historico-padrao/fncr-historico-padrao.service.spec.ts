import { Test, TestingModule } from '@nestjs/testing';
import { FncrHistoricoPadraoService } from './fncr-historico-padrao.service';

describe('FncrHistoricoPadraoService', () => {
  let service: FncrHistoricoPadraoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrHistoricoPadraoService],
    }).compile();

    service = module.get<FncrHistoricoPadraoService>(FncrHistoricoPadraoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
