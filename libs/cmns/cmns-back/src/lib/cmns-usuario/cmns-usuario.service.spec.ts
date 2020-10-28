import { Test, TestingModule } from '@nestjs/testing';
import { CmnsUsuarioService } from './cmns-usuario.service';

describe('CmnsUsuarioService', () => {
  let service: CmnsUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsUsuarioService],
    }).compile();

    service = module.get<CmnsUsuarioService>(CmnsUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
