import { Test, TestingModule } from '@nestjs/testing';
import { MenuSistemaPastaController } from './menu-sistema-pasta.controller';

describe('MenuSistemaPastaController', () => {
  let controller: MenuSistemaPastaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuSistemaPastaController],
    }).compile();

    controller = module.get<MenuSistemaPastaController>(MenuSistemaPastaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
