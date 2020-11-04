import { Test, TestingModule } from '@nestjs/testing';
import { FncrBancoContaController } from './fncr-banco-conta.controller';

describe('FncrBancoContaController', () => {
  let controller: FncrBancoContaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrBancoContaController],
    }).compile();

    controller = module.get<FncrBancoContaController>(FncrBancoContaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
