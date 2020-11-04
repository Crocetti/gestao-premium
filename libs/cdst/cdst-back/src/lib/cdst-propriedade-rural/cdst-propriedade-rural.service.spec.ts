import { Test, TestingModule } from '@nestjs/testing';
import { CdstPropriedadeRuralService } from './cdst-propriedade-rural.service';

describe('CdstPropriedadeRuralService', () => {
  let service: CdstPropriedadeRuralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstPropriedadeRuralService],
    }).compile();

    service = module.get<CdstPropriedadeRuralService>(CdstPropriedadeRuralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
