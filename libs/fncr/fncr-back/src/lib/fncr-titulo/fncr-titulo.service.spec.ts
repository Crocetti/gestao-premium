import { Test, TestingModule } from '@nestjs/testing';
import { FncrTituloService } from './fncr-titulo.service';

describe('FncrTituloService', () => {
  let service: FncrTituloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FncrTituloService],
    }).compile();

    service = module.get<FncrTituloService>(FncrTituloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
