import { Test, TestingModule } from '@nestjs/testing';
import { SstmSistemaVersaoController } from './sstm-sistema-versao.controller';

describe('SstmSistemaVersaoController', () => {
  let controller: SstmSistemaVersaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmSistemaVersaoController],
    }).compile();

    controller = module.get<SstmSistemaVersaoController>(SstmSistemaVersaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
