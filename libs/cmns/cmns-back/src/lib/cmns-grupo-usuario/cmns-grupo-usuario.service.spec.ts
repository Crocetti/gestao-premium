import { Test, TestingModule } from '@nestjs/testing';
import { CmnsGrupoUsuarioService } from './cmns-grupo-usuario.service';

describe('CmnsGrupoUsuarioService', () => {
  let service: CmnsGrupoUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsGrupoUsuarioService],
    }).compile();

    service = module.get<CmnsGrupoUsuarioService>(CmnsGrupoUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
