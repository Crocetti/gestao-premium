import { Test, TestingModule } from '@nestjs/testing';
import { CdstProdutoController } from './cdst-produto.controller';

describe('CdstProdutoController', () => {
  let controller: CdstProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstProdutoController],
    }).compile();

    controller = module.get<CdstProdutoController>(CdstProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
