import { Test, TestingModule } from '@nestjs/testing';
import { FsclNcmsController } from './fscl-ncms.controller';

describe('FsclNcmsController', () => {
  let controller: FsclNcmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FsclNcmsController],
    }).compile();

    controller = module.get<FsclNcmsController>(FsclNcmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
