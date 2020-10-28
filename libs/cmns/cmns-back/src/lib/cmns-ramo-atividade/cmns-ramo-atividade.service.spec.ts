import { Test, TestingModule } from '@nestjs/testing';
import { CmnsRamoAtividadeService } from './cmns-ramo-atividade.service';

describe('CmnsRamoAtividadeService', () => {
  let service: CmnsRamoAtividadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsRamoAtividadeService],
    }).compile();

    service = module.get<CmnsRamoAtividadeService>(CmnsRamoAtividadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
