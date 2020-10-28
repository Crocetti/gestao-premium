import { Test, TestingModule } from '@nestjs/testing';
import { CmnsTipoTelefoneController } from './cmns-tipo-telefone.controller';

describe('CmnsTipoTelefoneController', () => {
  let controller: CmnsTipoTelefoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsTipoTelefoneController],
    }).compile();

    controller = module.get<CmnsTipoTelefoneController>(CmnsTipoTelefoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
