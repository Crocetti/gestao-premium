import { Module } from '@nestjs/common';
import { MailFtpsService } from './mail-ftps/mail-ftps.service';
import { MailSmtpService } from './mail-smtp/mail-smtp.service';
import { MailFtpsController } from './mail-ftps/mail-ftps.controller';
import { MailSmtpController } from './mail-smtp/mail-smtp.controller';

@Module({
  controllers: [MailFtpsController, MailSmtpController],
  providers: [MailFtpsService, MailSmtpService],
  exports: [],
})
export class MailBackModule {}
