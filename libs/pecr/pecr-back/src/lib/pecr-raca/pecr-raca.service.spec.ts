import { Test, TestingModule } from '@nestjs/testing';
import { PecrRacaService } from './pecr-raca.service';

describe('PecrRacaService', () => {
  let service: PecrRacaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrRacaService],
    }).compile();

    service = module.get<PecrRacaService>(PecrRacaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
