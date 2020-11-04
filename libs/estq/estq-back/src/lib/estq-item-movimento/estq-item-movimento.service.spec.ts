import { Test, TestingModule } from '@nestjs/testing';
import { EstqItemMovimentoService } from './estq-item-movimento.service';

describe('EstqItemMovimentoService', () => {
  let service: EstqItemMovimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqItemMovimentoService],
    }).compile();

    service = module.get<EstqItemMovimentoService>(EstqItemMovimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
