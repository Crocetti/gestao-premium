import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaTelefoneController } from './cmns-pessoa-telefone.controller';

describe('CmnsPessoaTelefoneController', () => {
  let controller: CmnsPessoaTelefoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsPessoaTelefoneController],
    }).compile();

    controller = module.get<CmnsPessoaTelefoneController>(CmnsPessoaTelefoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
