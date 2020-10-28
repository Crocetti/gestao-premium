import { Test, TestingModule } from '@nestjs/testing';
import { CmnsProfissaoController } from './cmns-profissao.controller';

describe('CmnsProfissaoController', () => {
  let controller: CmnsProfissaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsProfissaoController],
    }).compile();

    controller = module.get<CmnsProfissaoController>(CmnsProfissaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
