import { Test, TestingModule } from '@nestjs/testing';
import { PecrLoteSaldoService } from './pecr-lote-saldo.service';

describe('PecrLoteSaldoService', () => {
  let service: PecrLoteSaldoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrLoteSaldoService],
    }).compile();

    service = module.get<PecrLoteSaldoService>(PecrLoteSaldoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
