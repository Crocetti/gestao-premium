import { Test, TestingModule } from '@nestjs/testing';
import { FncrPlanoOrcamentarioController } from './fncr-plano-orcamentario.controller';

describe('FncrPlanoOrcamentarioController', () => {
  let controller: FncrPlanoOrcamentarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrPlanoOrcamentarioController],
    }).compile();

    controller = module.get<FncrPlanoOrcamentarioController>(FncrPlanoOrcamentarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
