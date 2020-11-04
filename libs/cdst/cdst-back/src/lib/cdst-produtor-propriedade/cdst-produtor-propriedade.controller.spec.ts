import { Test, TestingModule } from '@nestjs/testing';
import { CdstProdutorPropriedadeController } from './cdst-produtor-propriedade.controller';

describe('CdstProdutorPropriedadeController', () => {
  let controller: CdstProdutorPropriedadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstProdutorPropriedadeController],
    }).compile();

    controller = module.get<CdstProdutorPropriedadeController>(CdstProdutorPropriedadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
