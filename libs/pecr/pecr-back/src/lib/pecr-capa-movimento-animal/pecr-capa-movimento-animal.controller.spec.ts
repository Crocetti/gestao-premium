import { Test, TestingModule } from '@nestjs/testing';
import { PecrCapaMovimentoAnimalController } from './pecr-capa-movimento-animal.controller';

describe('PecrCapaMovimentoAnimalController', () => {
  let controller: PecrCapaMovimentoAnimalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrCapaMovimentoAnimalController],
    }).compile();

    controller = module.get<PecrCapaMovimentoAnimalController>(PecrCapaMovimentoAnimalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
