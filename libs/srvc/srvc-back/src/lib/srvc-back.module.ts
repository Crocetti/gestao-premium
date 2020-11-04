import { Module } from '@nestjs/common';
import { SrvcOrdemServicoService } from './srvc-ordem-servico/srvc-ordem-servico.service';
import { SrvcOrdemServicoItemService } from './srvc-ordem-servico-item/srvc-ordem-servico-item.service';
import { SrvcServicoService } from './srvc-servico/srvc-servico.service';
import { SrvcServicoPecasService } from './srvc-servico-pecas/srvc-servico-pecas.service';
import { SrvcServicoComposicaoService } from './srvc-servico-composicao/srvc-servico-composicao.service';
import { SrvcServicoMaqEquipService } from './srvc-servico-maq-equip/srvc-servico-maq-equip.service';
import { SrvcServicoController } from './srvc-servico/srvc-servico.controller';
import { SrvcOrdemServicoController } from './srvc-ordem-servico/srvc-ordem-servico.controller';
import { SrvcOrdemServicoItemController } from './srvc-ordem-servico-item/srvc-ordem-servico-item.controller';
import { SrvcServicoComposicaoController } from './srvc-servico-composicao/srvc-servico-composicao.controller';
import { SrvcServicoMaqEquipController } from './srvc-servico-maq-equip/srvc-servico-maq-equip.controller';
import { SrvcServicoPecasController } from './srvc-servico-pecas/srvc-servico-pecas.controller';

@Module({
  controllers: [SrvcServicoController, SrvcOrdemServicoController, SrvcOrdemServicoItemController, SrvcServicoComposicaoController, SrvcServicoMaqEquipController, SrvcServicoPecasController],
  providers: [SrvcOrdemServicoService, SrvcOrdemServicoItemService, SrvcServicoService, SrvcServicoPecasService, SrvcServicoComposicaoService, SrvcServicoMaqEquipService],
  exports: [],
})
export class SrvcBackModule {}
