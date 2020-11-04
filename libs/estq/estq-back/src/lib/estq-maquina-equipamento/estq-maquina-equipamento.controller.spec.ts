import { Test, TestingModule } from '@nestjs/testing';
import { EstqMaquinaEquipamentoController } from './estq-maquina-equipamento.controller';

describe('EstqMaquinaEquipamentoController', () => {
  let controller: EstqMaquinaEquipamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqMaquinaEquipamentoController],
    }).compile();

    controller = module.get<EstqMaquinaEquipamentoController>(EstqMaquinaEquipamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
