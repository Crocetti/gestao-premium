import { Test, TestingModule } from '@nestjs/testing';
import { FncrPlanoOrcamentarioService } from './fncr-plano-orcamentario.service';

describe('FncrPlanoOrcamentarioService', () => {
  let service: FncrPlanoOrcamentarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrPlanoOrcamentarioService],
    }).compile();

    service = module.get<FncrPlanoOrcamentarioService>(FncrPlanoOrcamentarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
