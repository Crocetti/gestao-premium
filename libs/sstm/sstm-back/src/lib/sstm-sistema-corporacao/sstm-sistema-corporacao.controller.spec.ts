import { Test, TestingModule } from '@nestjs/testing';
import { SstmSistemaCorporacaoController } from './sstm-sistema-corporacao.controller';

describe('SstmSistemaCorporacaoController', () => {
  let controller: SstmSistemaCorporacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmSistemaCorporacaoController],
    }).compile();

    controller = module.get<SstmSistemaCorporacaoController>(SstmSistemaCorporacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
