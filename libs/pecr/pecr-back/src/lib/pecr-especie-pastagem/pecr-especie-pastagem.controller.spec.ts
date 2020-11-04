import { Test, TestingModule } from '@nestjs/testing';
import { PecrEspeciePastagemController } from './pecr-especie-pastagem.controller';

describe('PecrEspeciePastagemController', () => {
  let controller: PecrEspeciePastagemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecrEspeciePastagemController],
    }).compile();

    controller = module.get<PecrEspeciePastagemController>(PecrEspeciePastagemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
