import { Test, TestingModule } from '@nestjs/testing';
import { PecrAptidaoService } from './pecr-aptidao.service';

describe('PecrAptidaoService', () => {
  let service: PecrAptidaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrAptidaoService],
    }).compile();

    service = module.get<PecrAptidaoService>(PecrAptidaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
