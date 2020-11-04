import { Test, TestingModule } from '@nestjs/testing';
import { FncrBancoModeloBoletoController } from './fncr-banco-modelo-boleto.controller';

describe('FncrBancoModeloBoletoController', () => {
  let controller: FncrBancoModeloBoletoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrBancoModeloBoletoController],
    }).compile();

    controller = module.get<FncrBancoModeloBoletoController>(FncrBancoModeloBoletoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
