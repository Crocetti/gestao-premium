import { Test, TestingModule } from '@nestjs/testing';
import { EstqSaldoCentroCustoService } from './estq-saldo-centro-custo.service';

describe('EstqSaldoCentroCustoService', () => {
  let service: EstqSaldoCentroCustoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqSaldoCentroCustoService],
    }).compile();

    service = module.get<EstqSaldoCentroCustoService>(EstqSaldoCentroCustoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
