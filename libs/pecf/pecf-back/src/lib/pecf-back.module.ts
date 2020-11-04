import { Module } from '@nestjs/common';
import { PecfAliquotaService } from './pecf-aliquota/pecf-aliquota.service';
import { PecfCaixaService } from './pecf-caixa/pecf-caixa.service';
import { PecfConfiguracaoService } from './pecf-configuracao/pecf-configuracao.service';
import { PecfContadorService } from './pecf-contador/pecf-contador.service';
import { PecfAliquotaController } from './pecf-aliquota/pecf-aliquota.controller';
import { PecfCaixaController } from './pecf-caixa/pecf-caixa.controller';
import { PecfConfiguracaoController } from './pecf-configuracao/pecf-configuracao.controller';
import { PecfContadorController } from './pecf-contador/pecf-contador.controller';

@Module({
  controllers: [PecfAliquotaController, PecfCaixaController, PecfConfiguracaoController, PecfContadorController],
  providers: [PecfAliquotaService, PecfCaixaService, PecfConfiguracaoService, PecfContadorService],
  exports: [],
})
export class PecBackModule {}
