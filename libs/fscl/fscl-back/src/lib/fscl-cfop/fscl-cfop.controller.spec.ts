import { Test, TestingModule } from '@nestjs/testing';
import { FsclCfopController } from './fscl-cfop.controller';

describe('FsclCfopController', () => {
  let controller: FsclCfopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FsclCfopController],
    }).compile();

    controller = module.get<FsclCfopController>(FsclCfopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
