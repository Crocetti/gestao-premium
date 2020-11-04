import { Test, TestingModule } from '@nestjs/testing';
import { PecrEspecieController } from './pecr-especie.controller';

describe('PecrEspecieController', () => {
  let controller: PecrEspecieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrEspecieController],
    }).compile();

    controller = module.get<PecrEspecieController>(PecrEspecieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
