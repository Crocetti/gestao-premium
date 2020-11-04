import { Test, TestingModule } from '@nestjs/testing';
import { FncrCaixaController } from './fncr-caixa.controller';

describe('FncrCaixaController', () => {
  let controller: FncrCaixaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrCaixaController],
    }).compile();

    controller = module.get<FncrCaixaController>(FncrCaixaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
