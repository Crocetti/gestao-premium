import { Test, TestingModule } from '@nestjs/testing';
import { PecrTipoEventoSanitarioService } from './pecr-tipo-evento-sanitario.service';

describe('PecrTipoEventoSanitarioService', () => {
  let service: PecrTipoEventoSanitarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrTipoEventoSanitarioService],
    }).compile();

    service = module.get<PecrTipoEventoSanitarioService>(PecrTipoEventoSanitarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
