import { Test, TestingModule } from '@nestjs/testing';
import { FncrNivelPlanoContaController } from './fncr-nivel-plano-conta.controller';

describe('FncrNivelPlanoContaController', () => {
  let controller: FncrNivelPlanoContaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrNivelPlanoContaController],
    }).compile();

    controller = module.get<FncrNivelPlanoContaController>(FncrNivelPlanoContaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
