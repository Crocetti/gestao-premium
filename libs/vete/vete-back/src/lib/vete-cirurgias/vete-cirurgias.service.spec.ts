import { Test, TestingModule } from '@nestjs/testing';
import { VeteCirurgiasService } from './vete-cirurgias.service';

describe('VeteCirurgiasService', () => {
  let service: VeteCirurgiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeteCirurgiasService],
    }).compile();

    service = module.get<VeteCirurgiasService>(VeteCirurgiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
