import { Test, TestingModule } from '@nestjs/testing';
import { FncrPlanoContaController } from './fncr-plano-conta.controller';

describe('FncrPlanoContaController', () => {
  let controller: FncrPlanoContaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrPlanoContaController],
    }).compile();

    controller = module.get<FncrPlanoContaController>(FncrPlanoContaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
