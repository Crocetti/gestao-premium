import { Test, TestingModule } from '@nestjs/testing';
import { FncrParcelaBaixaService } from './fncr-parcela-baixa.service';

describe('FncrParcelaBaixaService', () => {
  let service: FncrParcelaBaixaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrParcelaBaixaService],
    }).compile();

    service = module.get<FncrParcelaBaixaService>(FncrParcelaBaixaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
