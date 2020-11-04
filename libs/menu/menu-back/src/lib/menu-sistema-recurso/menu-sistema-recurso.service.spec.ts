import { Test, TestingModule } from '@nestjs/testing';
import { MenuSistemaRecursoService } from './menu-sistema-recurso.service';

describe('MenuSistemaRecursoService', () => {
  let service: MenuSistemaRecursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuSistemaRecursoService],
    }).compile();

    service = module.get<MenuSistemaRecursoService>(MenuSistemaRecursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
