import { Test, TestingModule } from '@nestjs/testing';
import { CmnsTipoTelefoneService } from './cmns-tipo-telefone.service';

describe('CmnsTipoTelefoneService', () => {
  let service: CmnsTipoTelefoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsTipoTelefoneService],
    }).compile();

    service = module.get<CmnsTipoTelefoneService>(CmnsTipoTelefoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
