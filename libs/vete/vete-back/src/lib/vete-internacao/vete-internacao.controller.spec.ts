import { Test, TestingModule } from '@nestjs/testing';
import { VeteInternacaoController } from './vete-internacao.controller';

describe('VeteInternacaoController', () => {
  let controller: VeteInternacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeteInternacaoController],
    }).compile();

    controller = module.get<VeteInternacaoController>(VeteInternacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
