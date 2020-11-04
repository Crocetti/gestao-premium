import { Test, TestingModule } from '@nestjs/testing';
import { FncrFormaVencimentoController } from './fncr-forma-vencimento.controller';

describe('FncrFormaVencimentoController', () => {
  let controller: FncrFormaVencimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrFormaVencimentoController],
    }).compile();

    controller = module.get<FncrFormaVencimentoController>(FncrFormaVencimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
