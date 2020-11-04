import { Test, TestingModule } from '@nestjs/testing';
import { SstmScriptsService } from './sstm-scripts.service';

describe('SstmScriptsService', () => {
  let service: SstmScriptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmScriptsService],
    }).compile();

    service = module.get<SstmScriptsService>(SstmScriptsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
