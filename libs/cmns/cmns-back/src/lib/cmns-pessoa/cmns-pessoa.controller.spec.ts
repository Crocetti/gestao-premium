import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaController } from './cmns-pessoa.controller';

describe('CmnsPessoaController', () => {
  let controller: CmnsPessoaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsPessoaController],
    }).compile();

    controller = module.get<CmnsPessoaController>(CmnsPessoaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
