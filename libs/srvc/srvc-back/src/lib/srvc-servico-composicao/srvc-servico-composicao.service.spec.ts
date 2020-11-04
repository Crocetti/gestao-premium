import { Test, TestingModule } from '@nestjs/testing';
import { SrvcServicoComposicaoService } from './srvc-servico-composicao.service';

describe('SrvcServicoComposicaoService', () => {
  let service: SrvcServicoComposicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SrvcServicoComposicaoService],
    }).compile();

    service = module.get<SrvcServicoComposicaoService>(SrvcServicoComposicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
