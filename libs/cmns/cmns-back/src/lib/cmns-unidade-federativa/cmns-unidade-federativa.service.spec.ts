import { Test, TestingModule } from '@nestjs/testing';
import { CmnsUnidadeFederativaService } from './cmns-unidade-federativa.service';

describe('CmnsUnidadeFederativaService', () => {
  let service: CmnsUnidadeFederativaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsUnidadeFederativaService],
    }).compile();

    service = module.get<CmnsUnidadeFederativaService>(CmnsUnidadeFederativaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
