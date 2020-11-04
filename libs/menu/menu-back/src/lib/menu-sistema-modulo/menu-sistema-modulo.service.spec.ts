import { Test, TestingModule } from '@nestjs/testing';
import { MenuSistemaModuloService } from './menu-sistema-modulo.service';

describe('MenuSistemaModuloService', () => {
  let service: MenuSistemaModuloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuSistemaModuloService],
    }).compile();

    service = module.get<MenuSistemaModuloService>(MenuSistemaModuloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
