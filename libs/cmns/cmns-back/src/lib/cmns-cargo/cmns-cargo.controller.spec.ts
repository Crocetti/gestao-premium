import { Test, TestingModule } from '@nestjs/testing';
import { CmnsCargoController } from './cmns-cargo.controller';

describe('CmnsCargoController', () => {
  let controller: CmnsCargoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsCargoController],
    }).compile();

    controller = module.get<CmnsCargoController>(CmnsCargoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
