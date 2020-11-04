import { Test, TestingModule } from '@nestjs/testing';
import { MenuRecursoGrupoUsuarioController } from './menu-recurso-grupo-usuario.controller';

describe('MenuRecursoGrupoUsuarioController', () => {
  let controller: MenuRecursoGrupoUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuRecursoGrupoUsuarioController],
    }).compile();

    controller = module.get<MenuRecursoGrupoUsuarioController>(MenuRecursoGrupoUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
