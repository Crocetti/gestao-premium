import { Test, TestingModule } from '@nestjs/testing';
import { PecrProdutoPecuariaService } from './pecr-produto-pecuaria.service';

describe('PecrProdutoPecuariaService', () => {
  let service: PecrProdutoPecuariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrProdutoPecuariaService],
    }).compile();

    service = module.get<PecrProdutoPecuariaService>(PecrProdutoPecuariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
