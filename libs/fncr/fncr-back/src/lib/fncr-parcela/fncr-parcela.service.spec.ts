import { Test, TestingModule } from '@nestjs/testing';
import { FncrParcelaService } from './fncr-parcela.service';

describe('FncrParcelaService', () => {
  let service: FncrParcelaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrParcelaService],
    }).compile();

    service = module.get<FncrParcelaService>(FncrParcelaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
