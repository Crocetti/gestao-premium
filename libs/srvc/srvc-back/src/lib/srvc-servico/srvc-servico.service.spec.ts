import { Test, TestingModule } from '@nestjs/testing';
import { SrvcServicoService } from './srvc-servico.service';

describe('SrvcServicoService', () => {
  let service: SrvcServicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SrvcServicoService],
    }).compile();

    service = module.get<SrvcServicoService>(SrvcServicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
