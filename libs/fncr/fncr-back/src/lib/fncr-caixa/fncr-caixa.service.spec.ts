import { Test, TestingModule } from '@nestjs/testing';
import { FncrCaixaService } from './fncr-caixa.service';

describe('FncrCaixaService', () => {
  let service: FncrCaixaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrCaixaService],
    }).compile();

    service = module.get<FncrCaixaService>(FncrCaixaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
