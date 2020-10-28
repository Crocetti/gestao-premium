import { Test, TestingModule } from '@nestjs/testing';
import { CmnsLogradouroController } from './cmns-logradouro.controller';

describe('CmnsLogradouroController', () => {
  let controller: CmnsLogradouroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsLogradouroController],
    }).compile();

    controller = module.get<CmnsLogradouroController>(CmnsLogradouroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
