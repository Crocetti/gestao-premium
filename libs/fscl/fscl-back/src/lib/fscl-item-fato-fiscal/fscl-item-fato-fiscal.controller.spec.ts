import { Test, TestingModule } from '@nestjs/testing';
import { FsclItemFatoFiscalController } from './fscl-item-fato-fiscal.controller';

describe('FsclItemFatoFiscalController', () => {
  let controller: FsclItemFatoFiscalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FsclItemFatoFiscalController],
    }).compile();

    controller = module.get<FsclItemFatoFiscalController>(FsclItemFatoFiscalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
