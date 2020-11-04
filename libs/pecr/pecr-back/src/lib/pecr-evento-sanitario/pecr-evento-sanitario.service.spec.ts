import { Test, TestingModule } from '@nestjs/testing';
import { PecrEventoSanitarioService } from './pecr-evento-sanitario.service';

describe('PecrEventoSanitarioService', () => {
  let service: PecrEventoSanitarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrEventoSanitarioService],
    }).compile();

    service = module.get<PecrEventoSanitarioService>(PecrEventoSanitarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
