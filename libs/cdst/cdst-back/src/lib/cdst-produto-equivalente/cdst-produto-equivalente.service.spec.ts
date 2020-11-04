import { Test, TestingModule } from '@nestjs/testing';
import { CdstProdutoEquivalenteService } from './cdst-produto-equivalente.service';

describe('CdstProdutoEquivalenteService', () => {
  let service: CdstProdutoEquivalenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstProdutoEquivalenteService],
    }).compile();

    service = module.get<CdstProdutoEquivalenteService>(CdstProdutoEquivalenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
