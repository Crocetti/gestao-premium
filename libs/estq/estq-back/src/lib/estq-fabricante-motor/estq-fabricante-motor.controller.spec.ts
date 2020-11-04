import { Test, TestingModule } from '@nestjs/testing';
import { EstqFabricanteMotorController } from './estq-fabricante-motor.controller';

describe('EstqFabricanteMotorController', () => {
  let controller: EstqFabricanteMotorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstqFabricanteMotorController],
    }).compile();

    controller = module.get<EstqFabricanteMotorController>(EstqFabricanteMotorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
