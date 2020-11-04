import { Test, TestingModule } from '@nestjs/testing';
import { EstqProdutoSaldoService } from './estq-produto-saldo.service';

describe('EstqProdutoSaldoService', () => {
  let service: EstqProdutoSaldoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqProdutoSaldoService],
    }).compile();

    service = module.get<EstqProdutoSaldoService>(EstqProdutoSaldoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
