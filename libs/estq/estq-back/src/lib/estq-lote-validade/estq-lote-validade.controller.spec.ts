import { Test, TestingModule } from '@nestjs/testing';
import { EstqLoteValidadeController } from './estq-lote-validade.controller';

describe('EstqLoteValidadeController', () => {
  let controller: EstqLoteValidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqLoteValidadeController],
    }).compile();

    controller = module.get<EstqLoteValidadeController>(EstqLoteValidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
