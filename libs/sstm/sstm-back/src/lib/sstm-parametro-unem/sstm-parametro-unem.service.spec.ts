import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroUnemService } from './sstm-parametro-unem.service';

describe('SstmParametroUnemService', () => {
  let service: SstmParametroUnemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmParametroUnemService],
    }).compile();

    service = module.get<SstmParametroUnemService>(SstmParametroUnemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
