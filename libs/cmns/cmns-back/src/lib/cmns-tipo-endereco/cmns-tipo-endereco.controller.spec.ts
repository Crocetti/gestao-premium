import { Test, TestingModule } from '@nestjs/testing';
import { CmnsTipoEnderecoController } from './cmns-tipo-endereco.controller';

describe('CmnsTipoEnderecoController', () => {
  let controller: CmnsTipoEnderecoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsTipoEnderecoController],
    }).compile();

    controller = module.get<CmnsTipoEnderecoController>(CmnsTipoEnderecoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
