import { Test, TestingModule } from '@nestjs/testing';
import { MenuPastaService } from './menu-pasta.service';

describe('MenuPastaService', () => {
  let service: MenuPastaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuPastaService],
    }).compile();

    service = module.get<MenuPastaService>(MenuPastaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
