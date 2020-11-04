import { Test, TestingModule } from '@nestjs/testing';
import { FsclCstService } from './fscl-cst.service';

describe('FsclCstService', () => {
  let service: FsclCstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsclCstService],
    }).compile();

    service = module.get<FsclCstService>(FsclCstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
