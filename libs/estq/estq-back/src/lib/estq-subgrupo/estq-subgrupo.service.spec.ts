import { Test, TestingModule } from '@nestjs/testing';
import { EstqSubgrupoService } from './estq-subgrupo.service';

describe('EstqSubgrupoService', () => {
  let service: EstqSubgrupoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqSubgrupoService],
    }).compile();

    service = module.get<EstqSubgrupoService>(EstqSubgrupoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
