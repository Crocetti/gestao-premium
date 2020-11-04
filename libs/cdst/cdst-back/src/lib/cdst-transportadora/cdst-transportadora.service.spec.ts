import { Test, TestingModule } from '@nestjs/testing';
import { CdstTransportadoraService } from './cdst-transportadora.service';

describe('CdstTransportadoraService', () => {
  let service: CdstTransportadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstTransportadoraService],
    }).compile();

    service = module.get<CdstTransportadoraService>(CdstTransportadoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
