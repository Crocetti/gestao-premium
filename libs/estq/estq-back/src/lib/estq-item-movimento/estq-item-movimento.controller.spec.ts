import { Test, TestingModule } from '@nestjs/testing';
import { EstqItemMovimentoController } from './estq-item-movimento.controller';

describe('EstqItemMovimentoController', () => {
  let controller: EstqItemMovimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqItemMovimentoController],
    }).compile();

    controller = module.get<EstqItemMovimentoController>(EstqItemMovimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
