import { Test, TestingModule } from '@nestjs/testing';
import { CmnsLogradouroService } from './cmns-logradouro.service';

describe('CmnsLogradouroService', () => {
  let service: CmnsLogradouroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsLogradouroService],
    }).compile();

    service = module.get<CmnsLogradouroService>(CmnsLogradouroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
