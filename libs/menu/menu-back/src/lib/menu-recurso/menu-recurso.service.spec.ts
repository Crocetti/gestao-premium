import { Test, TestingModule } from '@nestjs/testing';
import { MenuRecursoService } from './menu-recurso.service';

describe('MenuRecursoService', () => {
  let service: MenuRecursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuRecursoService],
    }).compile();

    service = module.get<MenuRecursoService>(MenuRecursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
