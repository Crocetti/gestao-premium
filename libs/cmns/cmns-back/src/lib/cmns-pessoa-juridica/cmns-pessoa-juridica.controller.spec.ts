import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaJuridicaController } from './cmns-pessoa-juridica.controller';

describe('CmnsPessoaJuridicaController', () => {
  let controller: CmnsPessoaJuridicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsPessoaJuridicaController],
    }).compile();

    controller = module.get<CmnsPessoaJuridicaController>(CmnsPessoaJuridicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
