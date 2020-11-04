import { Test, TestingModule } from '@nestjs/testing';
import { FsclDocumentoItemController } from './fscl-documento-item.controller';

describe('FsclDocumentoItemController', () => {
  let controller: FsclDocumentoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FsclDocumentoItemController],
    }).compile();

    controller = module.get<FsclDocumentoItemController>(FsclDocumentoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
