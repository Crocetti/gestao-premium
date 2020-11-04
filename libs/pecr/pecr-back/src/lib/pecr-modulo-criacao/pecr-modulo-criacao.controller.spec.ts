import { Test, TestingModule } from '@nestjs/testing';
import { PecrModuloCriacaoController } from './pecr-modulo-criacao.controller';

describe('PecrModuloCriacaoController', () => {
  let controller: PecrModuloCriacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrModuloCriacaoController],
    }).compile();

    controller = module.get<PecrModuloCriacaoController>(PecrModuloCriacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
