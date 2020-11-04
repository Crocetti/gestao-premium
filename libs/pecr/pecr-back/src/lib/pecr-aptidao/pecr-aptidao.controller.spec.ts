import { Test, TestingModule } from '@nestjs/testing';
import { PecrAptidaoController } from './pecr-aptidao.controller';

describe('PecrAptidaoController', () => {
  let controller: PecrAptidaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrAptidaoController],
    }).compile();

    controller = module.get<PecrAptidaoController>(PecrAptidaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
