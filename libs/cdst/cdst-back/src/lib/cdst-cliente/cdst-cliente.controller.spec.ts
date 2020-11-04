import { Test, TestingModule } from '@nestjs/testing';
import { CdstClienteController } from './cdst-cliente.controller';

describe('CdstClienteController', () => {
  let controller: CdstClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstClienteController],
    }).compile();

    controller = module.get<CdstClienteController>(CdstClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
