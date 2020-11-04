import { Test, TestingModule } from '@nestjs/testing';
import { PecfContadorService } from './pecf-contador.service';

describe('PecfContadorService', () => {
  let service: PecfContadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecfContadorService],
    }).compile();

    service = module.get<PecfContadorService>(PecfContadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
