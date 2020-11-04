import { Test, TestingModule } from '@nestjs/testing';
import { CdstProdutorRuralService } from './cdst-produtor-rural.service';

describe('CdstProdutorRuralService', () => {
  let service: CdstProdutorRuralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstProdutorRuralService],
    }).compile();

    service = module.get<CdstProdutorRuralService>(CdstProdutorRuralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
