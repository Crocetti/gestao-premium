import { Test, TestingModule } from '@nestjs/testing';
import { VeteOrdemDeServicoController } from './vete-ordem-de-servico.controller';

describe('VeteOrdemDeServicoController', () => {
  let controller: VeteOrdemDeServicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeteOrdemDeServicoController],
    }).compile();

    controller = module.get<VeteOrdemDeServicoController>(VeteOrdemDeServicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
