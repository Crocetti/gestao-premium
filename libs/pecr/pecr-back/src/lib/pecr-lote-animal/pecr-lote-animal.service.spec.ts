import { Test, TestingModule } from '@nestjs/testing';
import { PecrLoteAnimalService } from './pecr-lote-animal.service';

describe('PecrLoteAnimalService', () => {
  let service: PecrLoteAnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrLoteAnimalService],
    }).compile();

    service = module.get<PecrLoteAnimalService>(PecrLoteAnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
