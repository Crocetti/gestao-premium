import { Test, TestingModule } from '@nestjs/testing';
import { SstmSistemaTabelaController } from './sstm-sistema-tabela.controller';

describe('SstmSistemaTabelaController', () => {
  let controller: SstmSistemaTabelaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmSistemaTabelaController],
    }).compile();

    controller = module.get<SstmSistemaTabelaController>(SstmSistemaTabelaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
