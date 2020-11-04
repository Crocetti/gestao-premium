import { Test, TestingModule } from '@nestjs/testing';
import { PecrDadosAbczController } from './pecr-dados-abcz.controller';

describe('PecrDadosAbczController', () => {
  let controller: PecrDadosAbczController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrDadosAbczController],
    }).compile();

    controller = module.get<PecrDadosAbczController>(PecrDadosAbczController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
