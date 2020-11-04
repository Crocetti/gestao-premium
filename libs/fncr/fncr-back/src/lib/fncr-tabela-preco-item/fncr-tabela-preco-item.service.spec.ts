import { Test, TestingModule } from '@nestjs/testing';
import { FncrTabelaPrecoItemService } from './fncr-tabela-preco-item.service';

describe('FncrTabelaPrecoItemService', () => {
  let service: FncrTabelaPrecoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrTabelaPrecoItemService],
    }).compile();

    service = module.get<FncrTabelaPrecoItemService>(FncrTabelaPrecoItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
