import { Test, TestingModule } from '@nestjs/testing';
import { FsclNcmsService } from './fscl-ncms.service';

describe('FsclNcmsService', () => {
  let service: FsclNcmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsclNcmsService],
    }).compile();

    service = module.get<FsclNcmsService>(FsclNcmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
