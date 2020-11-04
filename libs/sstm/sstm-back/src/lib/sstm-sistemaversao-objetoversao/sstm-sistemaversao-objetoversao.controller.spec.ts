import { Test, TestingModule } from '@nestjs/testing';
import { SstmSistemaversaoObjetoversaoController } from './sstm-sistemaversao-objetoversao.controller';

describe('SstmSistemaversaoObjetoversaoController', () => {
  let controller: SstmSistemaversaoObjetoversaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmSistemaversaoObjetoversaoController],
    }).compile();

    controller = module.get<SstmSistemaversaoObjetoversaoController>(SstmSistemaversaoObjetoversaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
