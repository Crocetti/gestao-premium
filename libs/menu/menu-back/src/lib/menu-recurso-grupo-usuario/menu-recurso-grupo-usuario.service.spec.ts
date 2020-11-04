import { Test, TestingModule } from '@nestjs/testing';
import { MenuRecursoGrupoUsuarioService } from './menu-recurso-grupo-usuario.service';

describe('MenuRecursoGrupoUsuarioService', () => {
  let service: MenuRecursoGrupoUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuRecursoGrupoUsuarioService],
    }).compile();

    service = module.get<MenuRecursoGrupoUsuarioService>(MenuRecursoGrupoUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
