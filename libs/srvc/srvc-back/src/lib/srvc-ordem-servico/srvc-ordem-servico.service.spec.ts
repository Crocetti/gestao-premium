import { Test, TestingModule } from '@nestjs/testing';
import { SrvcOrdemServicoService } from './srvc-ordem-servico.service';

describe('SrvcOrdemServicoService', () => {
  let service: SrvcOrdemServicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SrvcOrdemServicoService],
    }).compile();

    service = module.get<SrvcOrdemServicoService>(SrvcOrdemServicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
