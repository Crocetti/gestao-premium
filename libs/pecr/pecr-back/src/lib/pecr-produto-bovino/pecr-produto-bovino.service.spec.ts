import { Test, TestingModule } from '@nestjs/testing';
import { PecrProdutoBovinoService } from './pecr-produto-bovino.service';

describe('PecrProdutoBovinoService', () => {
  let service: PecrProdutoBovinoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrProdutoBovinoService],
    }).compile();

    service = module.get<PecrProdutoBovinoService>(PecrProdutoBovinoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
