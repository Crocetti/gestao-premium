import { Test, TestingModule } from '@nestjs/testing';
import { CdstProdutoComposicaoService } from './cdst-produto-composicao.service';

describe('CdstProdutoComposicaoService', () => {
  let service: CdstProdutoComposicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstProdutoComposicaoService],
    }).compile();

    service = module.get<CdstProdutoComposicaoService>(CdstProdutoComposicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
