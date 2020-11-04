import { Test, TestingModule } from '@nestjs/testing';
import { PecrHistoricoCategoriaService } from './pecr-historico-categoria.service';

describe('PecrHistoricoCategoriaService', () => {
  let service: PecrHistoricoCategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrHistoricoCategoriaService],
    }).compile();

    service = module.get<PecrHistoricoCategoriaService>(PecrHistoricoCategoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
