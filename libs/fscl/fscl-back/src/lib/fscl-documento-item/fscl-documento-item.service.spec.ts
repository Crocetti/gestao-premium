import { Test, TestingModule } from '@nestjs/testing';
import { FsclDocumentoItemService } from './fscl-documento-item.service';

describe('FsclDocumentoItemService', () => {
  let service: FsclDocumentoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsclDocumentoItemService],
    }).compile();

    service = module.get<FsclDocumentoItemService>(FsclDocumentoItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
