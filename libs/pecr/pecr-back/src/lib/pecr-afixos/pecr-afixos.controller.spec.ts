import { Test, TestingModule } from '@nestjs/testing';
import { PecrAfixosController } from './pecr-afixos.controller';

describe('PecrAfixosController', () => {
  let controller: PecrAfixosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrAfixosController],
    }).compile();

    controller = module.get<PecrAfixosController>(PecrAfixosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
