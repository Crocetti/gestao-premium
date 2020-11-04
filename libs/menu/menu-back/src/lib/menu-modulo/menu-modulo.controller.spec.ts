import { Test, TestingModule } from '@nestjs/testing';
import { MenuModuloController } from './menu-modulo.controller';

describe('MenuModuloController', () => {
  let controller: MenuModuloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuModuloController],
    }).compile();

    controller = module.get<MenuModuloController>(MenuModuloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
