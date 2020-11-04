import { Test, TestingModule } from '@nestjs/testing';
import { VeteAnimalService } from './vete-animal.service';

describe('VeteAnimalService', () => {
  let service: VeteAnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeteAnimalService],
    }).compile();

    service = module.get<VeteAnimalService>(VeteAnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
