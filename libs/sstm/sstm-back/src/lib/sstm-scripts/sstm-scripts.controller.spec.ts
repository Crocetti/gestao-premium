import { Test, TestingModule } from '@nestjs/testing';
import { SstmScriptsController } from './sstm-scripts.controller';

describe('SstmScriptsController', () => {
  let controller: SstmScriptsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmScriptsController],
    }).compile();

    controller = module.get<SstmScriptsController>(SstmScriptsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
