import { Test, TestingModule } from '@nestjs/testing';
import { PecrCapaMovimentoAnimalService } from './pecr-capa-movimento-animal.service';

describe('PecrCapaMovimentoAnimalService', () => {
  let service: PecrCapaMovimentoAnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrCapaMovimentoAnimalService],
    }).compile();

    service = module.get<PecrCapaMovimentoAnimalService>(PecrCapaMovimentoAnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
