import { Test, TestingModule } from '@nestjs/testing';
import { CmnsUnidadeFederativaController } from './cmns-unidade-federativa.controller';

describe('CmnsUnidadeFederativaController', () => {
  let controller: CmnsUnidadeFederativaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsUnidadeFederativaController],
    }).compile();

    controller = module.get<CmnsUnidadeFederativaController>(CmnsUnidadeFederativaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
