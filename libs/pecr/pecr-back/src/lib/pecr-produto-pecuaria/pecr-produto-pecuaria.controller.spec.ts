import { Test, TestingModule } from '@nestjs/testing';
import { PecrProdutoPecuariaController } from './pecr-produto-pecuaria.controller';

describe('PecrProdutoPecuariaController', () => {
  let controller: PecrProdutoPecuariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrProdutoPecuariaController],
    }).compile();

    controller = module.get<PecrProdutoPecuariaController>(PecrProdutoPecuariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
