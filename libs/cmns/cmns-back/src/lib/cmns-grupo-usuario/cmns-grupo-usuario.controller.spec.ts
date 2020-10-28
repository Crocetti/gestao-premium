import { Test, TestingModule } from '@nestjs/testing';
import { CmnsGrupoUsuarioController } from './cmns-grupo-usuario.controller';

describe('CmnsGrupoUsuarioController', () => {
  let controller: CmnsGrupoUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsGrupoUsuarioController],
    }).compile();

    controller = module.get<CmnsGrupoUsuarioController>(CmnsGrupoUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
