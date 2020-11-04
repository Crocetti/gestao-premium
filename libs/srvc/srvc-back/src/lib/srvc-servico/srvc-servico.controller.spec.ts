import { Test, TestingModule } from '@nestjs/testing';
import { SrvcServicoController } from './srvc-servico.controller';

describe('SrvcServicoController', () => {
  let controller: SrvcServicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SrvcServicoController],
    }).compile();

    controller = module.get<SrvcServicoController>(SrvcServicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
