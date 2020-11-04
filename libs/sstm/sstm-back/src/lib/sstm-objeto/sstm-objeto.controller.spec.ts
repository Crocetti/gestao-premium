import { Test, TestingModule } from '@nestjs/testing';
import { SstmObjetoController } from './sstm-objeto.controller';

describe('SstmObjetoController', () => {
  let controller: SstmObjetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmObjetoController],
    }).compile();

    controller = module.get<SstmObjetoController>(SstmObjetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
