import { Test, TestingModule } from '@nestjs/testing';
import { SrvcOrdemServicoItemController } from './srvc-ordem-servico-item.controller';

describe('SrvcOrdemServicoItemController', () => {
  let controller: SrvcOrdemServicoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SrvcOrdemServicoItemController],
    }).compile();

    controller = module.get<SrvcOrdemServicoItemController>(SrvcOrdemServicoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
