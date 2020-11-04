import { Test, TestingModule } from '@nestjs/testing';
import { PecrItemMovimentoAnimalController } from './pecr-item-movimento-animal.controller';

describe('PecrItemMovimentoAnimalController', () => {
  let controller: PecrItemMovimentoAnimalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrItemMovimentoAnimalController],
    }).compile();

    controller = module.get<PecrItemMovimentoAnimalController>(PecrItemMovimentoAnimalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
