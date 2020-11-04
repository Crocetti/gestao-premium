import { Test, TestingModule } from '@nestjs/testing';
import { CoreUnidadeEmpresarialService } from './core-unidade-empresarial.service';

describe('CoreUnidadeEmpresarialService', () => {
  let service: CoreUnidadeEmpresarialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreUnidadeEmpresarialService],
    }).compile();

    service = module.get<CoreUnidadeEmpresarialService>(CoreUnidadeEmpresarialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
