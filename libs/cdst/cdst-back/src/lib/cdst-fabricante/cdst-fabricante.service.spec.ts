import { Test, TestingModule } from '@nestjs/testing';
import { CdstFabricanteService } from './cdst-fabricante.service';

describe('CdstFabricanteService', () => {
  let service: CdstFabricanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstFabricanteService],
    }).compile();

    service = module.get<CdstFabricanteService>(CdstFabricanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
