import { Test, TestingModule } from '@nestjs/testing';
import { CmnsCargoService } from './cmns-cargo.service';

describe('CmnsCargoService', () => {
  let service: CmnsCargoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsCargoService],
    }).compile();

    service = module.get<CmnsCargoService>(CmnsCargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
