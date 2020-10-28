import { Test, TestingModule } from '@nestjs/testing';
import { CmnsTipoEmailController } from './cmns-tipo-email.controller';

describe('CmnsTipoEmailController', () => {
  let controller: CmnsTipoEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsTipoEmailController],
    }).compile();

    controller = module.get<CmnsTipoEmailController>(CmnsTipoEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
