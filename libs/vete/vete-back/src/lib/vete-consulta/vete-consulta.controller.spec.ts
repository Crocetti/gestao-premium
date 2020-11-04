import { Test, TestingModule } from '@nestjs/testing';
import { VeteConsultaController } from './vete-consulta.controller';

describe('VeteConsultaController', () => {
  let controller: VeteConsultaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeteConsultaController],
    }).compile();

    controller = module.get<VeteConsultaController>(VeteConsultaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
