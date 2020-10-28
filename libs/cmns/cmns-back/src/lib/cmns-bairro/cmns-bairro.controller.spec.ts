import { Test, TestingModule } from '@nestjs/testing';
import { CmnsBairroController } from './cmns-bairro.controller';

describe('CmnsBairroController', () => {
  let controller: CmnsBairroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsBairroController],
    }).compile();

    controller = module.get<CmnsBairroController>(CmnsBairroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
