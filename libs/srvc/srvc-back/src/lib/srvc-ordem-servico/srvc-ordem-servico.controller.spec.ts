import { Test, TestingModule } from '@nestjs/testing';
import { SrvcOrdemServicoController } from './srvc-ordem-servico.controller';

describe('SrvcOrdemServicoController', () => {
  let controller: SrvcOrdemServicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SrvcOrdemServicoController],
    }).compile();

    controller = module.get<SrvcOrdemServicoController>(SrvcOrdemServicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
