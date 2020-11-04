import { Test, TestingModule } from '@nestjs/testing';
import { EstqProdutoSaldoController } from './estq-produto-saldo.controller';

describe('EstqProdutoSaldoController', () => {
  let controller: EstqProdutoSaldoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqProdutoSaldoController],
    }).compile();

    controller = module.get<EstqProdutoSaldoController>(EstqProdutoSaldoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
