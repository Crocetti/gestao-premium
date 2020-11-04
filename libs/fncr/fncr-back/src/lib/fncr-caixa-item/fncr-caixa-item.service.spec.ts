import { Test, TestingModule } from '@nestjs/testing';
import { FncrCaixaItemService } from './fncr-caixa-item.service';

describe('FncrCaixaItemService', () => {
  let service: FncrCaixaItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrCaixaItemService],
    }).compile();

    service = module.get<FncrCaixaItemService>(FncrCaixaItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
