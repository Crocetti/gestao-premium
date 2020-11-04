import { Test, TestingModule } from '@nestjs/testing';
import { CdstUnidadeMedidaService } from './cdst-unidade-medida.service';

describe('CdstUnidadeMedidaService', () => {
  let service: CdstUnidadeMedidaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstUnidadeMedidaService],
    }).compile();

    service = module.get<CdstUnidadeMedidaService>(CdstUnidadeMedidaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
