import { Test, TestingModule } from '@nestjs/testing';
import { FsclDocumentoService } from './fscl-documento.service';

describe('FsclDocumentoService', () => {
  let service: FsclDocumentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsclDocumentoService],
    }).compile();

    service = module.get<FsclDocumentoService>(FsclDocumentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
