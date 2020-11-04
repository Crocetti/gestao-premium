import { Test, TestingModule } from '@nestjs/testing';
import { PecrHistoricoPesagemService } from './pecr-historico-pesagem.service';

describe('PecrHistoricoPesagemService', () => {
  let service: PecrHistoricoPesagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrHistoricoPesagemService],
    }).compile();

    service = module.get<PecrHistoricoPesagemService>(PecrHistoricoPesagemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
