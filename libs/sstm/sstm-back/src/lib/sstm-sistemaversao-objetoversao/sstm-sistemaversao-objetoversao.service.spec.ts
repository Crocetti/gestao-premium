import { Test, TestingModule } from '@nestjs/testing';
import { SstmSistemaversaoObjetoversaoService } from './sstm-sistemaversao-objetoversao.service';

describe('SstmSistemaversaoObjetoversaoService', () => {
  let service: SstmSistemaversaoObjetoversaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmSistemaversaoObjetoversaoService],
    }).compile();

    service = module.get<SstmSistemaversaoObjetoversaoService>(SstmSistemaversaoObjetoversaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
