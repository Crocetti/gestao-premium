import { Test, TestingModule } from '@nestjs/testing';
import { PecrUnidadeCriacaoController } from './pecr-unidade-criacao.controller';

describe('PecrUnidadeCriacaoController', () => {
  let controller: PecrUnidadeCriacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrUnidadeCriacaoController],
    }).compile();

    controller = module.get<PecrUnidadeCriacaoController>(PecrUnidadeCriacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
