import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroService } from './sstm-parametro.service';

describe('SstmParametroService', () => {
  let service: SstmParametroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmParametroService],
    }).compile();

    service = module.get<SstmParametroService>(SstmParametroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
