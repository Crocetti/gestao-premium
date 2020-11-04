import { Test, TestingModule } from '@nestjs/testing';
import { PecrCategoriaController } from './pecr-categoria.controller';

describe('PecrCategoriaController', () => {
  let controller: PecrCategoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrCategoriaController],
    }).compile();

    controller = module.get<PecrCategoriaController>(PecrCategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
