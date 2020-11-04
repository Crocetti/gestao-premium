import { Test, TestingModule } from '@nestjs/testing';
import { MailFtpsService } from './mail-ftps.service';

describe('MailFtpsService', () => {
  let service: MailFtpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailFtpsService],
    }).compile();

    service = module.get<MailFtpsService>(MailFtpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
