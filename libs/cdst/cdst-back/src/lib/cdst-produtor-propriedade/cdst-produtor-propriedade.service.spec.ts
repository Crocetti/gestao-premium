import { Test, TestingModule } from '@nestjs/testing';
import { CdstProdutorPropriedadeService } from './cdst-produtor-propriedade.service';

describe('CdstProdutorPropriedadeService', () => {
  let service: CdstProdutorPropriedadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstProdutorPropriedadeService],
    }).compile();

    service = module.get<CdstProdutorPropriedadeService>(CdstProdutorPropriedadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
