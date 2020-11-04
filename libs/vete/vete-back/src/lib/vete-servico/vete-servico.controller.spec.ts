import { Test, TestingModule } from '@nestjs/testing';
import { VeteServicoController } from './vete-servico.controller';

describe('VeteServicoController', () => {
  let controller: VeteServicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeteServicoController],
    }).compile();

    controller = module.get<VeteServicoController>(VeteServicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
