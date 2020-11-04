import { Test, TestingModule } from '@nestjs/testing';
import { PecrUnidadeCriacaoService } from './pecr-unidade-criacao.service';

describe('PecrUnidadeCriacaoService', () => {
  let service: PecrUnidadeCriacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrUnidadeCriacaoService],
    }).compile();

    service = module.get<PecrUnidadeCriacaoService>(PecrUnidadeCriacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
