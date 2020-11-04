import { Test, TestingModule } from '@nestjs/testing';
import { EstqModeloController } from './estq-modelo.controller';

describe('EstqModeloController', () => {
  let controller: EstqModeloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqModeloController],
    }).compile();

    controller = module.get<EstqModeloController>(EstqModeloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
