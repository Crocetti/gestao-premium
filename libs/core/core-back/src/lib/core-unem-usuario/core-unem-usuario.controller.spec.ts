import { Test, TestingModule } from '@nestjs/testing';
import { CoreUnemUsuarioController } from './core-unem-usuario.controller';

describe('CoreUnemUsuarioController', () => {
  let controller: CoreUnemUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoreUnemUsuarioController],
    }).compile();

    controller = module.get<CoreUnemUsuarioController>(CoreUnemUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
