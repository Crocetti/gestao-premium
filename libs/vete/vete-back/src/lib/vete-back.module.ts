import { Module } from '@nestjs/common';
import { VeteAnimalService } from './vete-animal/vete-animal.service';
import { VeteAnimalFotoService } from './vete-animal-foto/vete-animal-foto.service';
import { VeteCirurgiasService } from './vete-cirurgias/vete-cirurgias.service';
import { VeteConsultaService } from './vete-consulta/vete-consulta.service';
import { VeteInternacaoService } from './vete-internacao/vete-internacao.service';
import { VeteOrdemDeServicoService } from './vete-ordem-de-servico/vete-ordem-de-servico.service';
import { VetePelagemService } from './vete-pelagem/vete-pelagem.service';
import { VetePorteService } from './vete-porte/vete-porte.service';
import { VeteRetornoProcedimentoService } from './vete-retorno-procedimento/vete-retorno-procedimento.service';
import { VeteRetornoService } from './vete-retorno/vete-retorno.service';
import { VeteServicoService } from './vete-servico/vete-servico.service';
import { VeteServicoComposicaoService } from './vete-servico-composicao/vete-servico-composicao.service';
import { VeteAnimalController } from './vete-animal/vete-animal.controller';
import { VeteAnimalFotoController } from './vete-animal-foto/vete-animal-foto.controller';
import { VeteCirurgiasController } from './vete-cirurgias/vete-cirurgias.controller';
import { VeteConsultaController } from './vete-consulta/vete-consulta.controller';
import { VeteInternacaoController } from './vete-internacao/vete-internacao.controller';
import { VeteOrdemDeServicoController } from './vete-ordem-de-servico/vete-ordem-de-servico.controller';
import { VetePelagemController } from './vete-pelagem/vete-pelagem.controller';
import { VetePorteController } from './vete-porte/vete-porte.controller';
import { VeteRetornoController } from './vete-retorno/vete-retorno.controller';
import { VeteRetornoProcedimentoController } from './vete-retorno-procedimento/vete-retorno-procedimento.controller';
import { VeteServicoController } from './vete-servico/vete-servico.controller';
import { VeteServicoComposicaoController } from './vete-servico-composicao/vete-servico-composicao.controller';

@Module({
  controllers: [VeteAnimalController, VeteAnimalFotoController, VeteCirurgiasController, VeteConsultaController, VeteInternacaoController, VeteOrdemDeServicoController, VetePelagemController, VetePorteController, VeteRetornoController, VeteRetornoProcedimentoController, VeteServicoController, VeteServicoComposicaoController],
  providers: [VeteAnimalService, VeteAnimalFotoService, VeteCirurgiasService, VeteConsultaService, VeteInternacaoService, VeteOrdemDeServicoService, VetePelagemService, VetePorteService, VeteRetornoProcedimentoService, VeteRetornoService, VeteServicoService, VeteServicoComposicaoService],
  exports: [],
})
export class VeteBackModule {}
