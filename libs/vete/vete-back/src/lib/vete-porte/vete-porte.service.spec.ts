import { Test, TestingModule } from '@nestjs/testing';
import { VetePorteService } from './vete-porte.service';

describe('VetePorteService', () => {
  let service: VetePorteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VetePorteService],
    }).compile();

    service = module.get<VetePorteService>(VetePorteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
