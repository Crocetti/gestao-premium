import { Test, TestingModule } from '@nestjs/testing';
import { VeteConsultaService } from './vete-consulta.service';

describe('VeteConsultaService', () => {
  let service: VeteConsultaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeteConsultaService],
    }).compile();

    service = module.get<VeteConsultaService>(VeteConsultaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
