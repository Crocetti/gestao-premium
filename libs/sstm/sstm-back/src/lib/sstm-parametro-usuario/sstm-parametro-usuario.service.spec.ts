import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroUsuarioService } from './sstm-parametro-usuario.service';

describe('SstmParametroUsuarioService', () => {
  let service: SstmParametroUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmParametroUsuarioService],
    }).compile();

    service = module.get<SstmParametroUsuarioService>(SstmParametroUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
