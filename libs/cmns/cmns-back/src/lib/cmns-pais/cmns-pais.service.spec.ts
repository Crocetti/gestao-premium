import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPaisService } from './cmns-pais.service';

describe('CmnsPaisService', () => {
  let service: CmnsPaisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsPaisService],
    }).compile();

    service = module.get<CmnsPaisService>(CmnsPaisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
