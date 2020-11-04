import { Test, TestingModule } from '@nestjs/testing';
import { FsclRegimeTributarioController } from './fscl-regime-tributario.controller';

describe('FsclRegimeTributarioController', () => {
  let controller: FsclRegimeTributarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FsclRegimeTributarioController],
    }).compile();

    controller = module.get<FsclRegimeTributarioController>(FsclRegimeTributarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
