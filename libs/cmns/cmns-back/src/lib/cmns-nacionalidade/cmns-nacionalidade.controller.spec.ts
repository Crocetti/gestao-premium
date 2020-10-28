import { Test, TestingModule } from '@nestjs/testing';
import { CmnsNacionalidadeController } from './cmns-nacionalidade.controller';

describe('CmnsNacionalidadeController', () => {
  let controller: CmnsNacionalidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsNacionalidadeController],
    }).compile();

    controller = module.get<CmnsNacionalidadeController>(CmnsNacionalidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
