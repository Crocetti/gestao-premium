import { Test, TestingModule } from '@nestjs/testing';
import { PecfConfiguracaoService } from './pecf-configuracao.service';

describe('PecfConfiguracaoService', () => {
  let service: PecfConfiguracaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecfConfiguracaoService],
    }).compile();

    service = module.get<PecfConfiguracaoService>(PecfConfiguracaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
