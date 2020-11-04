import { Test, TestingModule } from '@nestjs/testing';
import { CoreCorporacaoController } from './core-corporacao.controller';

describe('CoreCorporacaoController', () => {
  let controller: CoreCorporacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoreCorporacaoController],
    }).compile();

    controller = module.get<CoreCorporacaoController>(CoreCorporacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
