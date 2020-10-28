import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaFisicaController } from './cmns-pessoa-fisica.controller';

describe('CmnsPessoaFisicaController', () => {
  let controller: CmnsPessoaFisicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsPessoaFisicaController],
    }).compile();

    controller = module.get<CmnsPessoaFisicaController>(CmnsPessoaFisicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
