import { Test, TestingModule } from '@nestjs/testing';
import { PecrLoteSaldoController } from './pecr-lote-saldo.controller';

describe('PecrLoteSaldoController', () => {
  let controller: PecrLoteSaldoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrLoteSaldoController],
    }).compile();

    controller = module.get<PecrLoteSaldoController>(PecrLoteSaldoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
