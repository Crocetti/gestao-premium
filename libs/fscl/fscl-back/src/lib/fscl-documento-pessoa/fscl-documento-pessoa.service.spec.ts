import { Test, TestingModule } from '@nestjs/testing';
import { FsclDocumentoPessoaService } from './fscl-documento-pessoa.service';

describe('FsclDocumentoPessoaService', () => {
  let service: FsclDocumentoPessoaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsclDocumentoPessoaService],
    }).compile();

    service = module.get<FsclDocumentoPessoaService>(FsclDocumentoPessoaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
