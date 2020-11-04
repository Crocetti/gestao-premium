import { Test, TestingModule } from '@nestjs/testing';
import { EstqMaquinaEquipamentoService } from './estq-maquina-equipamento.service';

describe('EstqMaquinaEquipamentoService', () => {
  let service: EstqMaquinaEquipamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqMaquinaEquipamentoService],
    }).compile();

    service = module.get<EstqMaquinaEquipamentoService>(EstqMaquinaEquipamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
