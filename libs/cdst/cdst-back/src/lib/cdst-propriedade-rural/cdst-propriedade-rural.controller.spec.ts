import { Test, TestingModule } from '@nestjs/testing';
import { CdstPropriedadeRuralController } from './cdst-propriedade-rural.controller';

describe('CdstPropriedadeRuralController', () => {
  let controller: CdstPropriedadeRuralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstPropriedadeRuralController],
    }).compile();

    controller = module.get<CdstPropriedadeRuralController>(CdstPropriedadeRuralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
