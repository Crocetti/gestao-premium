import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroCorporacaoController } from './sstm-parametro-corporacao.controller';

describe('SstmParametroCorporacaoController', () => {
  let controller: SstmParametroCorporacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmParametroCorporacaoController],
    }).compile();

    controller = module.get<SstmParametroCorporacaoController>(SstmParametroCorporacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
