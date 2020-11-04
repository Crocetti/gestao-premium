import { Test, TestingModule } from '@nestjs/testing';
import { VeteServicoService } from './vete-servico.service';

describe('VeteServicoService', () => {
  let service: VeteServicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeteServicoService],
    }).compile();

    service = module.get<VeteServicoService>(VeteServicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
