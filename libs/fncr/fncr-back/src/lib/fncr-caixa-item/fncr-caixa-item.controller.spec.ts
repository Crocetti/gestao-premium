import { Test, TestingModule } from '@nestjs/testing';
import { FncrCaixaItemController } from './fncr-caixa-item.controller';

describe('FncrCaixaItemController', () => {
  let controller: FncrCaixaItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrCaixaItemController],
    }).compile();

    controller = module.get<FncrCaixaItemController>(FncrCaixaItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
