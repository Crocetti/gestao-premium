import { Test, TestingModule } from '@nestjs/testing';
import { VeteCirurgiasController } from './vete-cirurgias.controller';

describe('VeteCirurgiasController', () => {
  let controller: VeteCirurgiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeteCirurgiasController],
    }).compile();

    controller = module.get<VeteCirurgiasController>(VeteCirurgiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
