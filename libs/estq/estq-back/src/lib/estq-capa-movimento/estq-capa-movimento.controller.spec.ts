import { Test, TestingModule } from '@nestjs/testing';
import { EstqCapaMovimentoController } from './estq-capa-movimento.controller';

describe('EstqCapaMovimentoController', () => {
  let controller: EstqCapaMovimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqCapaMovimentoController],
    }).compile();

    controller = module.get<EstqCapaMovimentoController>(EstqCapaMovimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
