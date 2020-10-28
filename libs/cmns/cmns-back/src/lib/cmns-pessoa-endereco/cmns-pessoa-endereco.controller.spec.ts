import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaEnderecoController } from './cmns-pessoa-endereco.controller';

describe('CmnsPessoaEnderecoController', () => {
  let controller: CmnsPessoaEnderecoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsPessoaEnderecoController],
    }).compile();

    controller = module.get<CmnsPessoaEnderecoController>(CmnsPessoaEnderecoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
