import { Test, TestingModule } from '@nestjs/testing';
import { PecrModuloCriacaoService } from './pecr-modulo-criacao.service';

describe('PecrModuloCriacaoService', () => {
  let service: PecrModuloCriacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrModuloCriacaoService],
    }).compile();

    service = module.get<PecrModuloCriacaoService>(PecrModuloCriacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
