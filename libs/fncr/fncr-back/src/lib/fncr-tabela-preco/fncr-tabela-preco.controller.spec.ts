import { Test, TestingModule } from '@nestjs/testing';
import { FncrTabelaPrecoController } from './fncr-tabela-preco.controller';

describe('FncrTabelaPrecoController', () => {
  let controller: FncrTabelaPrecoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrTabelaPrecoController],
    }).compile();

    controller = module.get<FncrTabelaPrecoController>(FncrTabelaPrecoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
