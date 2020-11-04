import { Test, TestingModule } from '@nestjs/testing';
import { PecfContadorController } from './pecf-contador.controller';

describe('PecfContadorController', () => {
  let controller: PecfContadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecfContadorController],
    }).compile();

    controller = module.get<PecfContadorController>(PecfContadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
