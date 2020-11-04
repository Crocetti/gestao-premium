import { Test, TestingModule } from '@nestjs/testing';
import { FsclRegimeTributarioService } from './fscl-regime-tributario.service';

describe('FsclRegimeTributarioService', () => {
  let service: FsclRegimeTributarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsclRegimeTributarioService],
    }).compile();

    service = module.get<FsclRegimeTributarioService>(FsclRegimeTributarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
