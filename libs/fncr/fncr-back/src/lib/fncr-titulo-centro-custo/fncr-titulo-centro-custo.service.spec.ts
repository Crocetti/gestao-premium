import { Test, TestingModule } from '@nestjs/testing';
import { FncrTituloCentroCustoService } from './fncr-titulo-centro-custo.service';

describe('FncrTituloCentroCustoService', () => {
  let service: FncrTituloCentroCustoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrTituloCentroCustoService],
    }).compile();

    service = module.get<FncrTituloCentroCustoService>(FncrTituloCentroCustoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
