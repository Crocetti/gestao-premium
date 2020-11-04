import { Test, TestingModule } from '@nestjs/testing';
import { SstmSistemaService } from './sstm-sistema.service';

describe('SstmSistemaService', () => {
  let service: SstmSistemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmSistemaService],
    }).compile();

    service = module.get<SstmSistemaService>(SstmSistemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
