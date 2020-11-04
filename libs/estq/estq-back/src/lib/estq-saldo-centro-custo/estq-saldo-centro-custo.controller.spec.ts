import { Test, TestingModule } from '@nestjs/testing';
import { EstqSaldoCentroCustoController } from './estq-saldo-centro-custo.controller';

describe('EstqSaldoCentroCustoController', () => {
  let controller: EstqSaldoCentroCustoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqSaldoCentroCustoController],
    }).compile();

    controller = module.get<EstqSaldoCentroCustoController>(EstqSaldoCentroCustoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
