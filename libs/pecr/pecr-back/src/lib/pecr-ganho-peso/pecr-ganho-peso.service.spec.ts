import { Test, TestingModule } from '@nestjs/testing';
import { PecrGanhoPesoService } from './pecr-ganho-peso.service';

describe('PecrGanhoPesoService', () => {
  let service: PecrGanhoPesoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrGanhoPesoService],
    }).compile();

    service = module.get<PecrGanhoPesoService>(PecrGanhoPesoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
