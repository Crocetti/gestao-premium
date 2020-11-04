import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroController } from './sstm-parametro.controller';

describe('SstmParametroController', () => {
  let controller: SstmParametroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmParametroController],
    }).compile();

    controller = module.get<SstmParametroController>(SstmParametroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
