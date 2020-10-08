import { Test } from '@nestjs/testing';
import { CmnsControllersService } from './cmns-controllers.service';

describe('CmnsControllersService', () => {
  let service: CmnsControllersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CmnsControllersService],
    }).compile();

    service = module.get(CmnsControllersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
