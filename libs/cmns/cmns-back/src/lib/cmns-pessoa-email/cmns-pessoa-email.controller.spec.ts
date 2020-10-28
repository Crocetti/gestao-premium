import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPessoaEmailController } from './cmns-pessoa-email.controller';

describe('CmnsPessoaEmailController', () => {
  let controller: CmnsPessoaEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsPessoaEmailController],
    }).compile();

    controller = module.get<CmnsPessoaEmailController>(CmnsPessoaEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
