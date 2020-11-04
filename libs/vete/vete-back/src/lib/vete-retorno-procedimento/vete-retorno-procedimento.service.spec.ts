import { Test, TestingModule } from '@nestjs/testing';
import { VeteRetornoProcedimentoService } from './vete-retorno-procedimento.service';

describe('VeteRetornoProcedimentoService', () => {
  let service: VeteRetornoProcedimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeteRetornoProcedimentoService],
    }).compile();

    service = module.get<VeteRetornoProcedimentoService>(VeteRetornoProcedimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
