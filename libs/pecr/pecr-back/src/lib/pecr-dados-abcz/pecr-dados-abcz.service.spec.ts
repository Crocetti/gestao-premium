import { Test, TestingModule } from '@nestjs/testing';
import { PecrDadosAbczService } from './pecr-dados-abcz.service';

describe('PecrDadosAbczService', () => {
  let service: PecrDadosAbczService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrDadosAbczService],
    }).compile();

    service = module.get<PecrDadosAbczService>(PecrDadosAbczService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
