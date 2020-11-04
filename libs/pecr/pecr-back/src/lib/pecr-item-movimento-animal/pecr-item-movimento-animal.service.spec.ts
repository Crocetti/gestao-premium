import { Test, TestingModule } from '@nestjs/testing';
import { PecrItemMovimentoAnimalService } from './pecr-item-movimento-animal.service';

describe('PecrItemMovimentoAnimalService', () => {
  let service: PecrItemMovimentoAnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrItemMovimentoAnimalService],
    }).compile();

    service = module.get<PecrItemMovimentoAnimalService>(PecrItemMovimentoAnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
