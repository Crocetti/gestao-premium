import { Test, TestingModule } from '@nestjs/testing';
import { FsclDocumentoPessoaController } from './fscl-documento-pessoa.controller';

describe('FsclDocumentoPessoaController', () => {
  let controller: FsclDocumentoPessoaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FsclDocumentoPessoaController],
    }).compile();

    controller = module.get<FsclDocumentoPessoaController>(FsclDocumentoPessoaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
