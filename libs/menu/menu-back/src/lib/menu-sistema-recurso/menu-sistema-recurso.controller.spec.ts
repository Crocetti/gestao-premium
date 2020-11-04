import { Test, TestingModule } from '@nestjs/testing';
import { MenuSistemaRecursoController } from './menu-sistema-recurso.controller';

describe('MenuSistemaRecursoController', () => {
  let controller: MenuSistemaRecursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuSistemaRecursoController],
    }).compile();

    controller = module.get<MenuSistemaRecursoController>(MenuSistemaRecursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
