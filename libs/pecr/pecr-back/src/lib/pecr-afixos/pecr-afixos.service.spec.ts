import { Test, TestingModule } from '@nestjs/testing';
import { PecrAfixosService } from './pecr-afixos.service';

describe('PecrAfixosService', () => {
  let service: PecrAfixosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecrAfixosService],
    }).compile();

    service = module.get<PecrAfixosService>(PecrAfixosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
