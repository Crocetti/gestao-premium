import { Test, TestingModule } from '@nestjs/testing';
import { VetePorteController } from './vete-porte.controller';

describe('VetePorteController', () => {
  let controller: VetePorteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VetePorteController],
    }).compile();

    controller = module.get<VetePorteController>(VetePorteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
