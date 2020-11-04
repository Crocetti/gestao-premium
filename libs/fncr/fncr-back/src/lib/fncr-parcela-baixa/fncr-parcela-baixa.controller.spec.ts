import { Test, TestingModule } from '@nestjs/testing';
import { FncrParcelaBaixaController } from './fncr-parcela-baixa.controller';

describe('FncrParcelaBaixaController', () => {
  let controller: FncrParcelaBaixaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrParcelaBaixaController],
    }).compile();

    controller = module.get<FncrParcelaBaixaController>(FncrParcelaBaixaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
