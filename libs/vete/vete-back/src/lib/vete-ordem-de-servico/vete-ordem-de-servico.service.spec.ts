import { Test, TestingModule } from '@nestjs/testing';
import { VeteOrdemDeServicoService } from './vete-ordem-de-servico.service';

describe('VeteOrdemDeServicoService', () => {
  let service: VeteOrdemDeServicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeteOrdemDeServicoService],
    }).compile();

    service = module.get<VeteOrdemDeServicoService>(VeteOrdemDeServicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
