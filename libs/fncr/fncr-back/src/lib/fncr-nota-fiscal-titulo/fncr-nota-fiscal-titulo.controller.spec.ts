import { Test, TestingModule } from '@nestjs/testing';
import { FncrNotaFiscalTituloController } from './fncr-nota-fiscal-titulo.controller';

describe('FncrNotaFiscalTituloController', () => {
  let controller: FncrNotaFiscalTituloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrNotaFiscalTituloController],
    }).compile();

    controller = module.get<FncrNotaFiscalTituloController>(FncrNotaFiscalTituloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
