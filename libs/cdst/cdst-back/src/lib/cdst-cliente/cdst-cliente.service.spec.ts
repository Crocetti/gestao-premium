import { Test, TestingModule } from '@nestjs/testing';
import { CdstClienteService } from './cdst-cliente.service';

describe('CdstClienteService', () => {
  let service: CdstClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdstClienteService],
    }).compile();

    service = module.get<CdstClienteService>(CdstClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
