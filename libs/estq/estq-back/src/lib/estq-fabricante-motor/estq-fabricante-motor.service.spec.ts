import { Test, TestingModule } from '@nestjs/testing';
import { EstqFabricanteMotorService } from './estq-fabricante-motor.service';

describe('EstqFabricanteMotorService', () => {
  let service: EstqFabricanteMotorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstqFabricanteMotorService],
    }).compile();

    service = module.get<EstqFabricanteMotorService>(EstqFabricanteMotorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
