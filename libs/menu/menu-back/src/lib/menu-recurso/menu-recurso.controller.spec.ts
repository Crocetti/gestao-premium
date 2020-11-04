import { Test, TestingModule } from '@nestjs/testing';
import { MenuRecursoController } from './menu-recurso.controller';

describe('MenuRecursoController', () => {
  let controller: MenuRecursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuRecursoController],
    }).compile();

    controller = module.get<MenuRecursoController>(MenuRecursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
