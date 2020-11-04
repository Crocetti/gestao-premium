import { Test, TestingModule } from '@nestjs/testing';
import { CdstProdutoService } from './cdst-produto.service';

describe('CdstProdutoService', () => {
  let service: CdstProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstProdutoService],
    }).compile();

    service = module.get<CdstProdutoService>(CdstProdutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
