import { Test, TestingModule } from '@nestjs/testing';
import { CdstProdutorRuralController } from './cdst-produtor-rural.controller';

describe('CdstProdutorRuralController', () => {
  let controller: CdstProdutorRuralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstProdutorRuralController],
    }).compile();

    controller = module.get<CdstProdutorRuralController>(CdstProdutorRuralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
