import { Test, TestingModule } from '@nestjs/testing';
import { SstmObjetoService } from './sstm-objeto.service';

describe('SstmObjetoService', () => {
  let service: SstmObjetoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmObjetoService],
    }).compile();

    service = module.get<SstmObjetoService>(SstmObjetoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
