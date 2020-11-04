import { Test, TestingModule } from '@nestjs/testing';
import { CdstProdutoEquivalenteController } from './cdst-produto-equivalente.controller';

describe('CdstProdutoEquivalenteController', () => {
  let controller: CdstProdutoEquivalenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstProdutoEquivalenteController],
    }).compile();

    controller = module.get<CdstProdutoEquivalenteController>(CdstProdutoEquivalenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
