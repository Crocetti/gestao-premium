import { Test, TestingModule } from '@nestjs/testing';
import { SstmDatabaseController } from './sstm-database.controller';

describe('SstmDatabaseController', () => {
  let controller: SstmDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SstmDatabaseController],
    }).compile();

    controller = module.get<SstmDatabaseController>(SstmDatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
