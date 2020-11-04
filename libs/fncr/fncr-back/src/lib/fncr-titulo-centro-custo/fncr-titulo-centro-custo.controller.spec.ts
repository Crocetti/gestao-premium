import { Test, TestingModule } from '@nestjs/testing';
import { FncrTituloCentroCustoController } from './fncr-titulo-centro-custo.controller';

describe('FncrTituloCentroCustoController', () => {
  let controller: FncrTituloCentroCustoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrTituloCentroCustoController],
    }).compile();

    controller = module.get<FncrTituloCentroCustoController>(FncrTituloCentroCustoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
