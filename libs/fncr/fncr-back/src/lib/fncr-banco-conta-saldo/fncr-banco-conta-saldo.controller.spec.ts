import { Test, TestingModule } from '@nestjs/testing';
import { FncrBancoContaSaldoController } from './fncr-banco-conta-saldo.controller';

describe('FncrBancoContaSaldoController', () => {
  let controller: FncrBancoContaSaldoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrBancoContaSaldoController],
    }).compile();

    controller = module.get<FncrBancoContaSaldoController>(FncrBancoContaSaldoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
