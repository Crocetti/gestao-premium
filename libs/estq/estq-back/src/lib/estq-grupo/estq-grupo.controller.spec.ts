import { Test, TestingModule } from '@nestjs/testing';
import { EstqGrupoController } from './estq-grupo.controller';

describe('EstqGrupoController', () => {
  let controller: EstqGrupoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqGrupoController],
    }).compile();

    controller = module.get<EstqGrupoController>(EstqGrupoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
