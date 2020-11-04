import { Test, TestingModule } from '@nestjs/testing';
import { SrvcServicoPecasController } from './srvc-servico-pecas.controller';

describe('SrvcServicoPecasController', () => {
  let controller: SrvcServicoPecasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SrvcServicoPecasController],
    }).compile();

    controller = module.get<SrvcServicoPecasController>(SrvcServicoPecasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
