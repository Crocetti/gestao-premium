import { Test, TestingModule } from '@nestjs/testing';
import { EstqCapaMovimentoService } from './estq-capa-movimento.service';

describe('EstqCapaMovimentoService', () => {
  let service: EstqCapaMovimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqCapaMovimentoService],
    }).compile();

    service = module.get<EstqCapaMovimentoService>(EstqCapaMovimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
