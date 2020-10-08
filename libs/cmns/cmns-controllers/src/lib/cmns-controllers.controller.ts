import { Controller } from '@nestjs/common';
import { CmnsControllersService } from './cmns-controllers.service';

@Controller('cmns/cmns-controllers')
export class CmnsControllersController {
  constructor(private cmnsControllersService: CmnsControllersService) {}
}
