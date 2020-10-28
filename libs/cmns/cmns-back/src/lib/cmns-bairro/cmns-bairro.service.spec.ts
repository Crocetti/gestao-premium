import { Test, TestingModule } from '@nestjs/testing';
import { CmnsBairroService } from './cmns-bairro.service';

describe('CmnsBairroService', () => {
  let service: CmnsBairroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsBairroService],
    }).compile();

    service = module.get<CmnsBairroService>(CmnsBairroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
