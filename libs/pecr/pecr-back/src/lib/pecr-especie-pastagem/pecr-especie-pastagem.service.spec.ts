import { Test, TestingModule } from '@nestjs/testing';
import { PecrEspeciePastagemService } from './pecr-especie-pastagem.service';

describe('PecrEspeciePastagemService', () => {
  let service: PecrEspeciePastagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrEspeciePastagemService],
    }).compile();

    service = module.get<PecrEspeciePastagemService>(PecrEspeciePastagemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
