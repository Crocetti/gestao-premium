import { Test, TestingModule } from '@nestjs/testing';
import { RchmFuncionarioService } from './rchm-funcionario.service';

describe('RchmFuncionarioService', () => {
  let service: RchmFuncionarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RchmFuncionarioService],
    }).compile();

    service = module.get<RchmFuncionarioService>(RchmFuncionarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
