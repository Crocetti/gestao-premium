import { Test, TestingModule } from '@nestjs/testing';
import { FncrTabelaPrecoItemController } from './fncr-tabela-preco-item.controller';

describe('FncrTabelaPrecoItemController', () => {
  let controller: FncrTabelaPrecoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrTabelaPrecoItemController],
    }).compile();

    controller = module.get<FncrTabelaPrecoItemController>(FncrTabelaPrecoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
