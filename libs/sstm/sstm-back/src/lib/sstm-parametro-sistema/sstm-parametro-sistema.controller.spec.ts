import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroSistemaController } from './sstm-parametro-sistema.controller';

describe('SstmParametroSistemaController', () => {
  let controller: SstmParametroSistemaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmParametroSistemaController],
    }).compile();

    controller = module.get<SstmParametroSistemaController>(SstmParametroSistemaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
