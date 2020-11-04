import { Test, TestingModule } from '@nestjs/testing';
import { PecrLoteAnimalController } from './pecr-lote-animal.controller';

describe('PecrLoteAnimalController', () => {
  let controller: PecrLoteAnimalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrLoteAnimalController],
    }).compile();

    controller = module.get<PecrLoteAnimalController>(PecrLoteAnimalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
