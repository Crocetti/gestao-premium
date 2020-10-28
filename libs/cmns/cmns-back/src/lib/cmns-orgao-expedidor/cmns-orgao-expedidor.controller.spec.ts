import { Test, TestingModule } from '@nestjs/testing';
import { CmnsOrgaoExpedidorController } from './cmns-orgao-expedidor.controller';

describe('CmnsOrgaoExpedidorController', () => {
  let controller: CmnsOrgaoExpedidorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmnsOrgaoExpedidorController],
    }).compile();

    controller = module.get<CmnsOrgaoExpedidorController>(CmnsOrgaoExpedidorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
