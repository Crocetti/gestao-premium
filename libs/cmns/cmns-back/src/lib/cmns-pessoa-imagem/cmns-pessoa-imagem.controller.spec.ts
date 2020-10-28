import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaImagemController } from './cmns-pessoa-imagem.controller';

describe('CmnsPessoaImagemController', () => {
  let controller: CmnsPessoaImagemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsPessoaImagemController],
    }).compile();

    controller = module.get<CmnsPessoaImagemController>(CmnsPessoaImagemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
