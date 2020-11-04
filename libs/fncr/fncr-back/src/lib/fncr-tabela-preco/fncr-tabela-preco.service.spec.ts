import { Test, TestingModule } from '@nestjs/testing';
import { FncrTabelaPrecoService } from './fncr-tabela-preco.service';

describe('FncrTabelaPrecoService', () => {
  let service: FncrTabelaPrecoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrTabelaPrecoService],
    }).compile();

    service = module.get<FncrTabelaPrecoService>(FncrTabelaPrecoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
