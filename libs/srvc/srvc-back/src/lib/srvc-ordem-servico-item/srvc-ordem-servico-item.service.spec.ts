import { Test, TestingModule } from '@nestjs/testing';
import { SrvcOrdemServicoItemService } from './srvc-ordem-servico-item.service';

describe('SrvcOrdemServicoItemService', () => {
  let service: SrvcOrdemServicoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SrvcOrdemServicoItemService],
    }).compile();

    service = module.get<SrvcOrdemServicoItemService>(SrvcOrdemServicoItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
