import { Test, TestingModule } from '@nestjs/testing';
import { VeteAnimalController } from './vete-animal.controller';

describe('VeteAnimalController', () => {
  let controller: VeteAnimalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeteAnimalController],
    }).compile();

    controller = module.get<VeteAnimalController>(VeteAnimalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
