import { Test, TestingModule } from '@nestjs/testing';
import { EstqMarcaService } from './estq-marca.service';

describe('EstqMarcaService', () => {
  let service: EstqMarcaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqMarcaService],
    }).compile();

    service = module.get<EstqMarcaService>(EstqMarcaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
