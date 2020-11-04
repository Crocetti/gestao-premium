import { Test, TestingModule } from '@nestjs/testing';
import { CoreEmpresaService } from './core-empresa.service';

describe('CoreEmpresaService', () => {
  let service: CoreEmpresaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreEmpresaService],
    }).compile();

    service = module.get<CoreEmpresaService>(CoreEmpresaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
