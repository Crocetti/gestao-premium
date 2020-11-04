import { Test, TestingModule } from '@nestjs/testing';
import { PecrCategoriaService } from './pecr-categoria.service';

describe('PecrCategoriaService', () => {
  let service: PecrCategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrCategoriaService],
    }).compile();

    service = module.get<PecrCategoriaService>(PecrCategoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
