import { Test, TestingModule } from '@nestjs/testing';
import { CdstFornecedorService } from './cdst-fornecedor.service';

describe('CdstFornecedorService', () => {
  let service: CdstFornecedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstFornecedorService],
    }).compile();

    service = module.get<CdstFornecedorService>(CdstFornecedorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
