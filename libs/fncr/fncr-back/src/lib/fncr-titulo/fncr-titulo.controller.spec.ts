import { Test, TestingModule } from '@nestjs/testing';
import { FncrTituloController } from './fncr-titulo.controller';

describe('FncrTituloController', () => {
  let controller: FncrTituloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FncrTituloController],
    }).compile();

    controller = module.get<FncrTituloController>(FncrTituloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
