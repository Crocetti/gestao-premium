import { Test, TestingModule } from '@nestjs/testing';
import { PecfCaixaService } from './pecf-caixa.service';

describe('PecfCaixaService', () => {
  let service: PecfCaixaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecfCaixaService],
    }).compile();

    service = module.get<PecfCaixaService>(PecfCaixaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
