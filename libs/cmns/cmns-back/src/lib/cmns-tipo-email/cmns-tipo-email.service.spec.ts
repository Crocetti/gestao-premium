import { Test, TestingModule } from '@nestjs/testing';
import { CmnsTipoEmailService } from './cmns-tipo-email.service';

describe('CmnsTipoEmailService', () => {
  let service: CmnsTipoEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsTipoEmailService],
    }).compile();

    service = module.get<CmnsTipoEmailService>(CmnsTipoEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
