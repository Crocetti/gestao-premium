import { Test, TestingModule } from '@nestjs/testing';
import { CmnsPaisController } from './cmns-pais.controller';

describe('CmnsPaisController', () => {
  let controller: CmnsPaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsPaisController],
    }).compile();

    controller = module.get<CmnsPaisController>(CmnsPaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
