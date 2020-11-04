import { Test, TestingModule } from '@nestjs/testing';
import { PecrEventoSanitarioController } from './pecr-evento-sanitario.controller';

describe('PecrEventoSanitarioController', () => {
  let controller: PecrEventoSanitarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrEventoSanitarioController],
    }).compile();

    controller = module.get<PecrEventoSanitarioController>(PecrEventoSanitarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
