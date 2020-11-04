import { Test, TestingModule } from '@nestjs/testing';
import { PecrEspecieService } from './pecr-especie.service';

describe('PecrEspecieService', () => {
  let service: PecrEspecieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrEspecieService],
    }).compile();

    service = module.get<PecrEspecieService>(PecrEspecieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
