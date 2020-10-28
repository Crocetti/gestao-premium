import { Test, TestingModule } from '@nestjs/testing';
import { CmnsRamoAtividadeController } from './cmns-ramo-atividade.controller';

describe('CmnsRamoAtividadeController', () => {
  let controller: CmnsRamoAtividadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsRamoAtividadeController],
    }).compile();

    controller = module.get<CmnsRamoAtividadeController>(CmnsRamoAtividadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
