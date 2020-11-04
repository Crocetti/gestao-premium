import { Test, TestingModule } from '@nestjs/testing';
import { PecrHistoricoCoberturaService } from './pecr-historico-cobertura.service';

describe('PecrHistoricoCoberturaService', () => {
  let service: PecrHistoricoCoberturaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrHistoricoCoberturaService],
    }).compile();

    service = module.get<PecrHistoricoCoberturaService>(PecrHistoricoCoberturaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
