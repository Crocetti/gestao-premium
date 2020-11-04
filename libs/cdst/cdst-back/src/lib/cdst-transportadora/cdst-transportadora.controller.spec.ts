import { Test, TestingModule } from '@nestjs/testing';
import { CdstTransportadoraController } from './cdst-transportadora.controller';

describe('CdstTransportadoraController', () => {
  let controller: CdstTransportadoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstTransportadoraController],
    }).compile();

    controller = module.get<CdstTransportadoraController>(CdstTransportadoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
