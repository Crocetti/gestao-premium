import { Test, TestingModule } from '@nestjs/testing';
import { FsclItemFatoFiscalService } from './fscl-item-fato-fiscal.service';

describe('FsclItemFatoFiscalService', () => {
  let service: FsclItemFatoFiscalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsclItemFatoFiscalService],
    }).compile();

    service = module.get<FsclItemFatoFiscalService>(FsclItemFatoFiscalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
