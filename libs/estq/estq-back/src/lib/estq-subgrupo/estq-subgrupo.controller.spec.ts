import { Test, TestingModule } from '@nestjs/testing';
import { EstqSubgrupoController } from './estq-subgrupo.controller';

describe('EstqSubgrupoController', () => {
  let controller: EstqSubgrupoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqSubgrupoController],
    }).compile();

    controller = module.get<EstqSubgrupoController>(EstqSubgrupoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
