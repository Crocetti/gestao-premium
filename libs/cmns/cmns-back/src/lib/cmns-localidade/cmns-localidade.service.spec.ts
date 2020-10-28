import { Test, TestingModule } from '@nestjs/testing';
import { CmnsLocalidadeService } from './cmns-localidade.service';

describe('CmnsLocalidadeService', () => {
  let service: CmnsLocalidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsLocalidadeService],
    }).compile();

    service = module.get<CmnsLocalidadeService>(CmnsLocalidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
