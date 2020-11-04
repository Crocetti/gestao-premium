import { Test, TestingModule } from '@nestjs/testing';
import { FncrBancoController } from './fncr-banco.controller';

describe('FncrBancoController', () => {
  let controller: FncrBancoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrBancoController],
    }).compile();

    controller = module.get<FncrBancoController>(FncrBancoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
