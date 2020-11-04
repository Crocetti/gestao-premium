import { Test, TestingModule } from '@nestjs/testing';
import { EstqGrupoService } from './estq-grupo.service';

describe('EstqGrupoService', () => {
  let service: EstqGrupoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqGrupoService],
    }).compile();

    service = module.get<EstqGrupoService>(EstqGrupoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
