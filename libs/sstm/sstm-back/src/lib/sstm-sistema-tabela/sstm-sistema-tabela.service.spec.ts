import { Test, TestingModule } from '@nestjs/testing';
import { SstmSistemaTabelaService } from './sstm-sistema-tabela.service';

describe('SstmSistemaTabelaService', () => {
  let service: SstmSistemaTabelaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SstmSistemaTabelaService],
    }).compile();

    service = module.get<SstmSistemaTabelaService>(SstmSistemaTabelaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
