import { Test, TestingModule } from '@nestjs/testing';
import { MenuSistemaPastaService } from './menu-sistema-pasta.service';

describe('MenuSistemaPastaService', () => {
  let service: MenuSistemaPastaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuSistemaPastaService],
    }).compile();

    service = module.get<MenuSistemaPastaService>(MenuSistemaPastaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
