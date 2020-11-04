import { Test, TestingModule } from '@nestjs/testing';
import { PecrTipoEventoSanitarioController } from './pecr-tipo-evento-sanitario.controller';

describe('PecrTipoEventoSanitarioController', () => {
  let controller: PecrTipoEventoSanitarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrTipoEventoSanitarioController],
    }).compile();

    controller = module.get<PecrTipoEventoSanitarioController>(PecrTipoEventoSanitarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
