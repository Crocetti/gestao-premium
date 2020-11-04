import { Test, TestingModule } from '@nestjs/testing';
import { CdstClasseProdutoService } from './cdst-classe-produto.service';

describe('CdstClasseProdutoService', () => {
  let service: CdstClasseProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstClasseProdutoService],
    }).compile();

    service = module.get<CdstClasseProdutoService>(CdstClasseProdutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
