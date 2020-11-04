import { Test, TestingModule } from '@nestjs/testing';
import { CdstClasseProdutoController } from './cdst-classe-produto.controller';

describe('CdstClasseProdutoController', () => {
  let controller: CdstClasseProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstClasseProdutoController],
    }).compile();

    controller = module.get<CdstClasseProdutoController>(CdstClasseProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
