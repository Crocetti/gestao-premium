import { Test, TestingModule } from '@nestjs/testing';
import { MenuSistemaModuloController } from './menu-sistema-modulo.controller';

describe('MenuSistemaModuloController', () => {
  let controller: MenuSistemaModuloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuSistemaModuloController],
    }).compile();

    controller = module.get<MenuSistemaModuloController>(MenuSistemaModuloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
