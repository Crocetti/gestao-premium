import { Test, TestingModule } from '@nestjs/testing';
import { SrvcServicoMaqEquipController } from './srvc-servico-maq-equip.controller';

describe('SrvcServicoMaqEquipController', () => {
  let controller: SrvcServicoMaqEquipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SrvcServicoMaqEquipController],
    }).compile();

    controller = module.get<SrvcServicoMaqEquipController>(SrvcServicoMaqEquipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
