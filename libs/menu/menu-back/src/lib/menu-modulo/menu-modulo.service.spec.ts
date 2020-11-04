import { Test, TestingModule } from '@nestjs/testing';
import { MenuModuloService } from './menu-modulo.service';

describe('MenuModuloService', () => {
  let service: MenuModuloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuModuloService],
    }).compile();

    service = module.get<MenuModuloService>(MenuModuloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
