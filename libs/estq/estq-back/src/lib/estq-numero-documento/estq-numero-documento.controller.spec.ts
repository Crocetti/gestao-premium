import { Test, TestingModule } from '@nestjs/testing';
import { EstqNumeroDocumentoController } from './estq-numero-documento.controller';

describe('EstqNumeroDocumentoController', () => {
  let controller: EstqNumeroDocumentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqNumeroDocumentoController],
    }).compile();

    controller = module.get<EstqNumeroDocumentoController>(EstqNumeroDocumentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
