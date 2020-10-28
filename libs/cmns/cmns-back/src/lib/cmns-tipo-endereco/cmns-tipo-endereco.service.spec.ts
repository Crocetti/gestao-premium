import { Test, TestingModule } from '@nestjs/testing';
import { CmnsTipoEnderecoService } from './cmns-tipo-endereco.service';

describe('CmnsTipoEnderecoService', () => {
  let service: CmnsTipoEnderecoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsTipoEnderecoService],
    }).compile();

    service = module.get<CmnsTipoEnderecoService>(CmnsTipoEnderecoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
