import { Test, TestingModule } from '@nestjs/testing';
import { EstqModeloService } from './estq-modelo.service';

describe('EstqModeloService', () => {
  let service: EstqModeloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqModeloService],
    }).compile();

    service = module.get<EstqModeloService>(EstqModeloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
