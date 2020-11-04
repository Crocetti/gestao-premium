import { Test, TestingModule } from '@nestjs/testing';
import { PecrProdutoBovinoController } from './pecr-produto-bovino.controller';

describe('PecrProdutoBovinoController', () => {
  let controller: PecrProdutoBovinoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrProdutoBovinoController],
    }).compile();

    controller = module.get<PecrProdutoBovinoController>(PecrProdutoBovinoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
