import { Test, TestingModule } from '@nestjs/testing';
import { VetePelagemController } from './vete-pelagem.controller';

describe('VetePelagemController', () => {
  let controller: VetePelagemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VetePelagemController],
    }).compile();

    controller = module.get<VetePelagemController>(VetePelagemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
