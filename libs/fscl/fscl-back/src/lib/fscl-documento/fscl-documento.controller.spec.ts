import { Test, TestingModule } from '@nestjs/testing';
import { FsclDocumentoController } from './fscl-documento.controller';

describe('FsclDocumentoController', () => {
  let controller: FsclDocumentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FsclDocumentoController],
    }).compile();

    controller = module.get<FsclDocumentoController>(FsclDocumentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
