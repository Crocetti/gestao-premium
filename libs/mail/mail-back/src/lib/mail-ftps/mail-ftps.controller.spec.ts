import { Test, TestingModule } from '@nestjs/testing';
import { MailFtpsController } from './mail-ftps.controller';

describe('MailFtpsController', () => {
  let controller: MailFtpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailFtpsController],
    }).compile();

    controller = module.get<MailFtpsController>(MailFtpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
