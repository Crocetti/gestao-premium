import { Test, TestingModule } from '@nestjs/testing';
import { PecfAliquotaService } from './pecf-aliquota.service';

describe('PecfAliquotaService', () => {
  let service: PecfAliquotaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecfAliquotaService],
    }).compile();

    service = module.get<PecfAliquotaService>(PecfAliquotaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
