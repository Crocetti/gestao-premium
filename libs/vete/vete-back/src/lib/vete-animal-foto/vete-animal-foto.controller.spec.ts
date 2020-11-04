import { Test, TestingModule } from '@nestjs/testing';
import { VeteAnimalFotoController } from './vete-animal-foto.controller';

describe('VeteAnimalFotoController', () => {
  let controller: VeteAnimalFotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeteAnimalFotoController],
    }).compile();

    controller = module.get<VeteAnimalFotoController>(VeteAnimalFotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
