import { Test, TestingModule } from '@nestjs/testing';
import { FncrBancoModeloBoletoService } from './fncr-banco-modelo-boleto.service';

describe('FncrBancoModeloBoletoService', () => {
  let service: FncrBancoModeloBoletoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrBancoModeloBoletoService],
    }).compile();

    service = module.get<FncrBancoModeloBoletoService>(FncrBancoModeloBoletoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
