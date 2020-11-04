import { Test, TestingModule } from '@nestjs/testing';
import { VeteRetornoService } from './vete-retorno.service';

describe('VeteRetornoService', () => {
  let service: VeteRetornoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeteRetornoService],
    }).compile();

    service = module.get<VeteRetornoService>(VeteRetornoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
