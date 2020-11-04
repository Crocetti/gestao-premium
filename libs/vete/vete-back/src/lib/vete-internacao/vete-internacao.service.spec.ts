import { Test, TestingModule } from '@nestjs/testing';
import { VeteInternacaoService } from './vete-internacao.service';

describe('VeteInternacaoService', () => {
  let service: VeteInternacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeteInternacaoService],
    }).compile();

    service = module.get<VeteInternacaoService>(VeteInternacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
