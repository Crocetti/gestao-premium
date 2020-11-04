import { Test, TestingModule } from '@nestjs/testing';
import { PecfConfiguracaoController } from './pecf-configuracao.controller';

describe('PecfConfiguracaoController', () => {
  let controller: PecfConfiguracaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecfConfiguracaoController],
    }).compile();

    controller = module.get<PecfConfiguracaoController>(PecfConfiguracaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
