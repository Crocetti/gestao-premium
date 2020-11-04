import { Test, TestingModule } from '@nestjs/testing';
import { SrvcServicoMaqEquipService } from './srvc-servico-maq-equip.service';

describe('SrvcServicoMaqEquipService', () => {
  let service: SrvcServicoMaqEquipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SrvcServicoMaqEquipService],
    }).compile();

    service = module.get<SrvcServicoMaqEquipService>(SrvcServicoMaqEquipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
