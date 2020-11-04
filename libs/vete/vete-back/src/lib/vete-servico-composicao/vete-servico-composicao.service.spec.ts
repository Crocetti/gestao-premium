import { Test, TestingModule } from '@nestjs/testing';
import { VeteServicoComposicaoService } from './vete-servico-composicao.service';

describe('VeteServicoComposicaoService', () => {
  let service: VeteServicoComposicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeteServicoComposicaoService],
    }).compile();

    service = module.get<VeteServicoComposicaoService>(VeteServicoComposicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
