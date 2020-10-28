import { Test, TestingModule } from '@nestjs/testing';
import { CmnsUsuarioController } from './cmns-usuario.controller';

describe('CmnsUsuarioController', () => {
  let controller: CmnsUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsUsuarioController],
    }).compile();

    controller = module.get<CmnsUsuarioController>(CmnsUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
