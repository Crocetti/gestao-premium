import { Test, TestingModule } from '@nestjs/testing';
import { FncrParcelaController } from './fncr-parcela.controller';

describe('FncrParcelaController', () => {
  let controller: FncrParcelaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrParcelaController],
    }).compile();

    controller = module.get<FncrParcelaController>(FncrParcelaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
