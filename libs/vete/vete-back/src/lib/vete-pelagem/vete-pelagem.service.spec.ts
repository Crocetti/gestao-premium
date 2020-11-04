import { Test, TestingModule } from '@nestjs/testing';
import { VetePelagemService } from './vete-pelagem.service';

describe('VetePelagemService', () => {
  let service: VetePelagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VetePelagemService],
    }).compile();

    service = module.get<VetePelagemService>(VetePelagemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
