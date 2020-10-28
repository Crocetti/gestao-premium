import { Test, TestingModule } from '@nestjs/testing';
import { CmnsNacionalidadeService } from './cmns-nacionalidade.service';

describe('CmnsNacionalidadeService', () => {
  let service: CmnsNacionalidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsNacionalidadeService],
    }).compile();

    service = module.get<CmnsNacionalidadeService>(CmnsNacionalidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
