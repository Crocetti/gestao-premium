import { Test, TestingModule } from '@nestjs/testing';
import { RchmFuncionarioHistoricoService } from './rchm-funcionario-historico.service';

describe('RchmFuncionarioHistoricoService', () => {
  let service: RchmFuncionarioHistoricoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RchmFuncionarioHistoricoService],
    }).compile();

    service = module.get<RchmFuncionarioHistoricoService>(RchmFuncionarioHistoricoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
