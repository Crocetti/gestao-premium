import { Test, TestingModule } from '@nestjs/testing';
import { PecfCaixaController } from './pecf-caixa.controller';

describe('PecfCaixaController', () => {
  let controller: PecfCaixaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecfCaixaController],
    }).compile();

    controller = module.get<PecfCaixaController>(PecfCaixaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
