import { Test, TestingModule } from '@nestjs/testing';
import { SstmSistemaController } from './sstm-sistema.controller';

describe('SstmSistemaController', () => {
  let controller: SstmSistemaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmSistemaController],
    }).compile();

    controller = module.get<SstmSistemaController>(SstmSistemaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
