import { Test } from '@nestjs/testing';
import { CmnsControllersController } from './cmns-controllers.controller';
import { CmnsControllersService } from './cmns-controllers.service';

describe('CmnsControllersController', () => {
  let controller: CmnsControllersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CmnsControllersService],
      controllers: [CmnsControllersController],
    }).compile();

    controller = module.get(CmnsControllersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
