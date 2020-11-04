import { Test, TestingModule } from '@nestjs/testing';
import { EstqMarcaController } from './estq-marca.controller';

describe('EstqMarcaController', () => {
  let controller: EstqMarcaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqMarcaController],
    }).compile();

    controller = module.get<EstqMarcaController>(EstqMarcaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
