import { Test, TestingModule } from '@nestjs/testing';
import { CdstFabricanteController } from './cdst-fabricante.controller';

describe('CdstFabricanteController', () => {
  let controller: CdstFabricanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdstFabricanteController],
    }).compile();

    controller = module.get<CdstFabricanteController>(CdstFabricanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
