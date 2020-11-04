import { Test, TestingModule } from '@nestjs/testing';
import { PecfAliquotaController } from './pecf-aliquota.controller';

describe('PecfAliquotaController', () => {
  let controller: PecfAliquotaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecfAliquotaController],
    }).compile();

    controller = module.get<PecfAliquotaController>(PecfAliquotaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
