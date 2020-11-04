import { Test, TestingModule } from '@nestjs/testing';
import { VeteRetornoController } from './vete-retorno.controller';

describe('VeteRetornoController', () => {
  let controller: VeteRetornoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeteRetornoController],
    }).compile();

    controller = module.get<VeteRetornoController>(VeteRetornoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
