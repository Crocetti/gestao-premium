import { Test, TestingModule } from '@nestjs/testing';
import { SstmDatabaseService } from './sstm-database.service';

describe('SstmDatabaseService', () => {
  let service: SstmDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmDatabaseService],
    }).compile();

    service = module.get<SstmDatabaseService>(SstmDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
