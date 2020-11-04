import { Test, TestingModule } from '@nestjs/testing';
import { MailSmtpService } from './mail-smtp.service';

describe('MailSmtpService', () => {
  let service: MailSmtpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailSmtpService],
    }).compile();

    service = module.get<MailSmtpService>(MailSmtpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
