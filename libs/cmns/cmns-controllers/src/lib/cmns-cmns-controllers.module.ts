import { Module } from '@nestjs/common';
import { CmnsControllersService } from './cmns-controllers.service';
import { CmnsControllersController } from './cmns-controllers.controller';

@Module({
  controllers: [CmnsControllersController],
  providers: [CmnsControllersService],
  exports: [CmnsControllersService],
})
export class CmnsControllersModule {}
