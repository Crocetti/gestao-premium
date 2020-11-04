import { Test, TestingModule } from '@nestjs/testing';
import { SrvcServicoPecasService } from './srvc-servico-pecas.service';

describe('SrvcServicoPecasService', () => {
  let service: SrvcServicoPecasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SrvcServicoPecasService],
    }).compile();

    service = module.get<SrvcServicoPecasService>(SrvcServicoPecasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
