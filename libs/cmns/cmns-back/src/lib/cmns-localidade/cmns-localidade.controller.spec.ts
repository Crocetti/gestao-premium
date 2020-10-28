import { Test, TestingModule } from '@nestjs/testing';
import { CmnsLocalidadeController } from './cmns-localidade.controller';

describe('CmnsLocalidadeController', () => {
  let controller: CmnsLocalidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsLocalidadeController],
    }).compile();

    controller = module.get<CmnsLocalidadeController>(CmnsLocalidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
