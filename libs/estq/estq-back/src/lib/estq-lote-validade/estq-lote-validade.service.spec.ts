import { Test, TestingModule } from '@nestjs/testing';
import { EstqLoteValidadeService } from './estq-lote-validade.service';

describe('EstqLoteValidadeService', () => {
  let service: EstqLoteValidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqLoteValidadeService],
    }).compile();

    service = module.get<EstqLoteValidadeService>(EstqLoteValidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
