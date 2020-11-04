import { Test, TestingModule } from '@nestjs/testing';
import { CoreUnemUsuarioService } from './core-unem-usuario.service';

describe('CoreUnemUsuarioService', () => {
  let service: CoreUnemUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreUnemUsuarioService],
    }).compile();

    service = module.get<CoreUnemUsuarioService>(CoreUnemUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
