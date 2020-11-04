import { Module } from '@nestjs/common';
import { PecrAfixosService } from './pecr-afixos/pecr-afixos.service';
import { PecrAptidaoService } from './pecr-aptidao/pecr-aptidao.service';
import { PecrCapaMovimentoAnimalService } from './pecr-capa-movimento-animal/pecr-capa-movimento-animal.service';
import { PecrCategoriaService } from './pecr-categoria/pecr-categoria.service';
import { PecrDadosAbczService } from './pecr-dados-abcz/pecr-dados-abcz.service';
import { PecrEspeciePastagemService } from './pecr-especie-pastagem/pecr-especie-pastagem.service';
import { PecrEspecieService } from './pecr-especie/pecr-especie.service';
import { PecrEventoSanitarioService } from './pecr-evento-sanitario/pecr-evento-sanitario.service';
import { PecrGanhoPesoService } from './pecr-ganho-peso/pecr-ganho-peso.service';
import { PecrHistoricoCategoriaService } from './pecr-historico-categoria/pecr-historico-categoria.service';
import { PecrHistoricoCoberturaService } from './pecr-historico-cobertura/pecr-historico-cobertura.service';
import { PecrHistoricoPesagemService } from './pecr-historico-pesagem/pecr-historico-pesagem.service';
import { PecrItemMovimentoAnimalService } from './pecr-item-movimento-animal/pecr-item-movimento-animal.service';
import { PecrLoteAnimalService } from './pecr-lote-animal/pecr-lote-animal.service';
import { PecrLoteService } from './pecr-lote/pecr-lote.service';
import { PecrLoteSaldoService } from './pecr-lote-saldo/pecr-lote-saldo.service';
import { PecrModuloCriacaoService } from './pecr-modulo-criacao/pecr-modulo-criacao.service';
import { PecrProdutoBovinoService } from './pecr-produto-bovino/pecr-produto-bovino.service';
import { PecrProdutoPecuariaService } from './pecr-produto-pecuaria/pecr-produto-pecuaria.service';
import { PecrRacaService } from './pecr-raca/pecr-raca.service';
import { PecrTipoEventoSanitarioService } from './pecr-tipo-evento-sanitario/pecr-tipo-evento-sanitario.service';
import { PecrUnidadeCriacaoService } from './pecr-unidade-criacao/pecr-unidade-criacao.service';
import { PecrAfixosController } from './pecr-afixos/pecr-afixos.controller';
import { PecrAptidaoController } from './pecr-aptidao/pecr-aptidao.controller';
import { PecrCapaMovimentoAnimalController } from './pecr-capa-movimento-animal/pecr-capa-movimento-animal.controller';
import { PecrCategoriaController } from './pecr-categoria/pecr-categoria.controller';
import { PecrDadosAbczController } from './pecr-dados-abcz/pecr-dados-abcz.controller';
import { PecrEspecieController } from './pecr-especie/pecr-especie.controller';
import { PecrEspeciePastagemController } from './pecr-especie-pastagem/pecr-especie-pastagem.controller';
import { PecrEventoSanitarioController } from './pecr-evento-sanitario/pecr-evento-sanitario.controller';
import { PecrGanhoPesoController } from './pecr-ganho-peso/pecr-ganho-peso.controller';
import { PecrHistoricoCategoriaController } from './pecr-historico-categoria/pecr-historico-categoria.controller';
import { PecrHistoricoCoberturaController } from './pecr-historico-cobertura/pecr-historico-cobertura.controller';
import { PecrHistoricoPesagemController } from './pecr-historico-pesagem/pecr-historico-pesagem.controller';
import { PecrItemMovimentoAnimalController } from './pecr-item-movimento-animal/pecr-item-movimento-animal.controller';
import { PecrLoteController } from './pecr-lote/pecr-lote.controller';
import { PecrLoteAnimalController } from './pecr-lote-animal/pecr-lote-animal.controller';
import { PecrLoteSaldoController } from './pecr-lote-saldo/pecr-lote-saldo.controller';
import { PecrModuloCriacaoController } from './pecr-modulo-criacao/pecr-modulo-criacao.controller';
import { PecrProdutoBovinoController } from './pecr-produto-bovino/pecr-produto-bovino.controller';
import { PecrProdutoPecuariaController } from './pecr-produto-pecuaria/pecr-produto-pecuaria.controller';
import { PecrRacaController } from './pecr-raca/pecr-raca.controller';
import { PecrTipoEventoSanitarioController } from './pecr-tipo-evento-sanitario/pecr-tipo-evento-sanitario.controller';
import { PecrUnidadeCriacaoController } from './pecr-unidade-criacao/pecr-unidade-criacao.controller';

@Module({
  controllers: [PecrAfixosController, PecrAptidaoController, PecrCapaMovimentoAnimalController, PecrCategoriaController, PecrDadosAbczController, PecrEspecieController, PecrEspeciePastagemController, PecrEventoSanitarioController, PecrGanhoPesoController, PecrHistoricoCategoriaController, PecrHistoricoCoberturaController, PecrHistoricoPesagemController, PecrItemMovimentoAnimalController, PecrLoteController, PecrLoteAnimalController, PecrLoteSaldoController, PecrModuloCriacaoController, PecrProdutoBovinoController, PecrProdutoPecuariaController, PecrRacaController, PecrTipoEventoSanitarioController, PecrUnidadeCriacaoController],
  providers: [PecrAfixosService, PecrAptidaoService, PecrCapaMovimentoAnimalService, PecrCategoriaService, PecrDadosAbczService, PecrEspeciePastagemService, PecrEspecieService, PecrEventoSanitarioService, PecrGanhoPesoService, PecrHistoricoCategoriaService, PecrHistoricoCoberturaService, PecrHistoricoPesagemService, PecrItemMovimentoAnimalService, PecrLoteAnimalService, PecrLoteService, PecrLoteSaldoService, PecrModuloCriacaoService, PecrProdutoBovinoService, PecrProdutoPecuariaService, PecrRacaService, PecrTipoEventoSanitarioService, PecrUnidadeCriacaoService],
  exports: [],
})
export class PecrBackModule {}
