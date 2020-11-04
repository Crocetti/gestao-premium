import { Test, TestingModule } from '@nestjs/testing';
import { FsclCfopService } from './fscl-cfop.service';

describe('FsclCfopService', () => {
  let service: FsclCfopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsclCfopService],
    }).compile();

    service = module.get<FsclCfopService>(FsclCfopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
