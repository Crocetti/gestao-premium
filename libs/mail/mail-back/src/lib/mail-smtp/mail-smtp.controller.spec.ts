import { Test, TestingModule } from '@nestjs/testing';
import { MailSmtpController } from './mail-smtp.controller';

describe('MailSmtpController', () => {
  let controller: MailSmtpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailSmtpController],
    }).compile();

    controller = module.get<MailSmtpController>(MailSmtpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
