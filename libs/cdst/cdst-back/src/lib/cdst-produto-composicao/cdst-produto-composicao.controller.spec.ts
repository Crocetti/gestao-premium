import { Test, TestingModule } from '@nestjs/testing';
import { CdstProdutoComposicaoController } from './cdst-produto-composicao.controller';

describe('CdstProdutoComposicaoController', () => {
  let controller: CdstProdutoComposicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstProdutoComposicaoController],
    }).compile();

    controller = module.get<CdstProdutoComposicaoController>(CdstProdutoComposicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
