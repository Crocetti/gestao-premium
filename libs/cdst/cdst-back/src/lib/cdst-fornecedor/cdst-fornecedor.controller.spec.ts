import { Test, TestingModule } from '@nestjs/testing';
import { CdstFornecedorController } from './cdst-fornecedor.controller';

describe('CdstFornecedorController', () => {
  let controller: CdstFornecedorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstFornecedorController],
    }).compile();

    controller = module.get<CdstFornecedorController>(CdstFornecedorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
