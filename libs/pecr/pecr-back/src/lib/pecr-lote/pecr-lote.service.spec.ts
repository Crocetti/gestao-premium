import { Test, TestingModule } from '@nestjs/testing';
import { PecrLoteService } from './pecr-lote.service';

describe('PecrLoteService', () => {
  let service: PecrLoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrLoteService],
    }).compile();

    service = module.get<PecrLoteService>(PecrLoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
