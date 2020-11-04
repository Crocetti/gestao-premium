import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroUsuarioController } from './sstm-parametro-usuario.controller';

describe('SstmParametroUsuarioController', () => {
  let controller: SstmParametroUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmParametroUsuarioController],
    }).compile();

    controller = module.get<SstmParametroUsuarioController>(SstmParametroUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
