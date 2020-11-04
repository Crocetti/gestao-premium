import { Test, TestingModule } from '@nestjs/testing';
import { MenuPastaController } from './menu-pasta.controller';

describe('MenuPastaController', () => {
  let controller: MenuPastaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuPastaController],
    }).compile();

    controller = module.get<MenuPastaController>(MenuPastaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
