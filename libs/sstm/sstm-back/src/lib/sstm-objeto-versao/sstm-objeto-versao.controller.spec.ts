import { Test, TestingModule } from '@nestjs/testing';
import { SstmObjetoVersaoController } from './sstm-objeto-versao.controller';

describe('SstmObjetoVersaoController', () => {
  let controller: SstmObjetoVersaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmObjetoVersaoController],
    }).compile();

    controller = module.get<SstmObjetoVersaoController>(SstmObjetoVersaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
