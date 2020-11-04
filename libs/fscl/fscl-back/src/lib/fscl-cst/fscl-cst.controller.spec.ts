import { Test, TestingModule } from '@nestjs/testing';
import { FsclCstController } from './fscl-cst.controller';

describe('FsclCstController', () => {
  let controller: FsclCstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FsclCstController],
    }).compile();

    controller = module.get<FsclCstController>(FsclCstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
