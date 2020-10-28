import { Test, TestingModule } from '@nestjs/testing';
import { CmnsOrgaoExpedidorService } from './cmns-orgao-expedidor.service';

describe('CmnsOrgaoExpedidorService', () => {
  let service: CmnsOrgaoExpedidorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmnsOrgaoExpedidorService],
    }).compile();

    service = module.get<CmnsOrgaoExpedidorService>(CmnsOrgaoExpedidorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
