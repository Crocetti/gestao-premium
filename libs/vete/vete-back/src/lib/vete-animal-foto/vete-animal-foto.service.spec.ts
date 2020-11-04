import { Test, TestingModule } from '@nestjs/testing';
import { VeteAnimalFotoService } from './vete-animal-foto.service';

describe('VeteAnimalFotoService', () => {
  let service: VeteAnimalFotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeteAnimalFotoService],
    }).compile();

    service = module.get<VeteAnimalFotoService>(VeteAnimalFotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
