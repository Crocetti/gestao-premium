import { Test, TestingModule } from '@nestjs/testing';
import { SstmParametroUnemController } from './sstm-parametro-unem.controller';

describe('SstmParametroUnemController', () => {
  let controller: SstmParametroUnemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmParametroUnemController],
    }).compile();

    controller = module.get<SstmParametroUnemController>(SstmParametroUnemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
